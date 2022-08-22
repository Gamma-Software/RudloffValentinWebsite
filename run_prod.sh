echo REACT_APP_SANITY_PROJECT_ID=${SANITY_PROJECT_ID} > .env
echo REACT_APP_SANITY_TOKEN=${SANITY_TOKEN} >> .env
npm install -g serve
serve -s build -l 80