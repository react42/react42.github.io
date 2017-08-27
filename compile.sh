#!/bin/sh

cd www
yarn build

cd ..

rm -rvf docs
mkdir docs
cp -rvf www/build/* docs/

if [ "$1" = "-push" ]
then
  git add docs/*
  git commit -m "[UPD] build from $(date +'%d/%m/%Y')"
  git config --global push.default current
  git push
  git config --global push.default master
fi
