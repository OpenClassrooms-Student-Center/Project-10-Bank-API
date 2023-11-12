#!/bin/sh

(
  while ! curl --output /dev/null --silent --head --fail http://localhost:3001/api-docs/; do
    echo 'waiting for localhost:3001/api-docs to be available'
    sleep 1
  done
  echo 'API documentation is available, starting to populate the database...'
  npm run populate-db
  echo 'Database population script has been executed. App is ready.'
) &

echo 'Starting the development server...'
npm run dev:server
