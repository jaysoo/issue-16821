#!/bin/bash


VERSION=$(cut -d'/' -f2 <<<`git rev-parse --abbrev-ref HEAD`)
COMMIT_HASH=$(git rev-parse `git rev-parse --abbrev-ref HEAD`)

cp ./scripts/version.txt.template ./apps/version

sed -i -e 's/{VERSION}/'$VERSION'/; s/{COMMIT_HASH}/'$COMMIT_HASH'/' ./apps/version