# pull official base image
FROM node:16.16.0-alpine

# Add a work directory
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
ENTRYPOINT ["/bin/sh"]
CMD [ "run_prod.sh" ]
