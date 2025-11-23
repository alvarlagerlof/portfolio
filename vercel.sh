#!/bin/bash

if [[ $VERCEL_ENV == "production"  ]] ; then
  echo "Detected production environment, running lint and build"
  bun run format
  bun run lint
  bun run build
else
  echo "Detected non-production environment, skipping lint and running build"
  bun run build
fi


