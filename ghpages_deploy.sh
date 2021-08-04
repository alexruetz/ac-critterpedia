#!/bin/sh
set -e
npm rum build
cd dist
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:alexruetz/ac-critterpedia.git master:gh-pages
cd -