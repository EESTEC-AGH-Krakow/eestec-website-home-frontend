#!/bin/bash

LOCATION=$1

echo "sync files and remove unnecessary ..."
rsync -Pavh -e \"ssh -i ~/deploy_key\" ./dist "$USERNAME"@"$SERVER_ADDRESS":~"$LOCATION" --delete-after

echo "done, new version was released, check page in the browser!"
