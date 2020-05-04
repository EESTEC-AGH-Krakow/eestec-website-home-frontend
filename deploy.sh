#!/bin/bash

LOCATION=$1

openssl aes-256-cbc -K $encrypted_dfdcfd5172af_key -iv $encrypted_dfdcfd5172af_iv -in deploy_key.enc -out ./deploy_key -d
eval "$(ssh-agent -s)"
chmod 600 ./deploy_key
echo -e "Host $SERVER_ADDRESS\n\tStrictHostKeyChecking no\n" >> ~/.ssh/config
ssh-add ./deploy_key
ssh -i ./deploy_key "$USERNAME"@"$SERVER_ADDRESS" pwd
scp -r ./dist "$USERNAME"@"$SERVER_ADDRESS":~"$LOCATION"
