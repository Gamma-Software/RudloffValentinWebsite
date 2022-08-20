ARG SANITY_PROJECT_ID
ARG SANITY_TOKEN

# pull official base image
FROM node:16.16.0-alpine AS builder

ENV NODE_ENV production

# Add a work directory
WORKDIR /app
COPY . .
RUN touch .env && REACT_APP_SANITY_PROJECT_ID=${SANITY_PROJECT_ID} >> .env && REACT_APP_SANITY_TOKEN=${SANITY_TOKEN} >> .env
RUN npm install
RUN npm run build

# Bundle static assets with nginx
FROM nginx:alpine as production
ENV NODE_ENV production
# Copy built assets from builder
COPY --from=builder /app/build /usr/share/nginx/html
# Add your nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Expose port
EXPOSE 80
# Start nginx
CMD ["nginx", "-g", "daemon off;"]
