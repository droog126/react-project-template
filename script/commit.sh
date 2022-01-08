#!/usr/bin/env sh
# abort on errors
set -e
git add .
git commit -m 'new'  --no-verify
git push
cd -