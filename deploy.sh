#!/usr/bin/env sh

set -e 
npm run build

cd dist

git init
git add -A 
git commit -m "new Deplob"
git push -f git@github.com:nandaditra/tvmaze.git master:gh-pages 
cd -