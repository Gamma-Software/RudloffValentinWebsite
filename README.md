# RudloffWebsite
My personnal website

## Dockerize
### Dev environment
Start building the DEV environnement with the command 
``` bash
docker build -t npm-react-app:dev .
```
Then run it with the command from the root of the project
``` bash
docker run \
    -it \
    --rm \
    -v frontend_react:/app \
    -v /app/node_modules \
    -p 3001:3000 \
    -e CHOKIDAR_USEPOLLING=true \
    sample:dev
```
### Prod environment
Start building the PROD environnement with the command 
``` bash
docker build -f Dockerfile.prod -t npm-react-app:prod .
```
Then run it with the command from the root of the project
``` bash
docker run -it --rm -p 1337:80 sample:prod
```
