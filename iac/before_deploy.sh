#!/bin/bash

echo "start decrypting file ..."
openssl aes-256-cbc -K $encrypted_dfdcfd5172af_key -iv $encrypted_dfdcfd5172af_iv -in ./deploy_key.enc -out ./deploy_key -d

echo "start the ssh-agent to run ssh commands"
eval "$(ssh-agent -s)"

echo "change permissions on decrypted file to avoid warnings."
chmod 600 ./deploy_key

echo "avoid Travis asking if we want to \"check\" the identity of target host (VPS)"
echo -e "Host $SERVER_ADDRESS\n\tStrictHostKeyChecking no\n" >> ~/.ssh/config

echo "add the decrpyted file as preferred ssh RSA key."
ssh-add ./deploy_key

echo "run the pwd command on the deployment server using the decrypted file as \"identity\" file (RSA Key)"
ssh -i ./deploy_key "$USERNAME"@"$SERVER_ADDRESS" pwd

echo "connectivity test has been completed successfully!"
