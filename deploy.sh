#!/usr/bin/env sh

npm run build
cd dist
git init
git remote add origin https://github.com/Chaosito/chaosito.github.io.git
git add -A
git commit -m 'deploy'
git push -f origin HEAD:main
cd -
