#!/usr/bin/env sh

# abort on errors
set -e

# build
echo 'running release build'
npm install -g @vue/cli@latest
npm run build

echo 'cloning repo'
git clone https://$GITHUB_TOKEN@github.com/billstark/billstark.github.io.git release-repo

echo 'copying files'
yes | cp -rf dist/* release-repo/

git config --global user.email billstark1996@rakuten.com
git config --global user.name bill-ci

echo 'commiting changes repo'
cd release-repo
git add -A
git commit -m 'deploy'
git push https://$GITHUB_TOKEN@github.com/billstark/billstark.github.io.git

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -
rm -rf release-repo