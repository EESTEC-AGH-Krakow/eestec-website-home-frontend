#!/bin/bash

echo "start decrypting file ..."
openssl aes-256-cbc -K $encrypted_dfdcfd5172af_key -iv $encrypted_dfdcfd5172af_iv -in ./iac/deploy_key.enc -out ./deploy_key -d

echo "\nstart the ssh-agent to run ssh commands"
eval "$(ssh-agent -s)"

echo "\nchange permissions on decrypted file to avoid warnings."
chmod 600 ./deploy_key

echo "\navoid Travis asking if we want to \"check\" the identity of target host (VPS)"
echo -e "Host $SERVER_ADDRESS\n\tStrictHostKeyChecking no\n" >> ~/.ssh/config

echo "\nadd the decrpyted file as preferred ssh RSA key."
ssh-add ./deploy_key

echo "\nrun the pwd command on the deployment server using the decrypted file as \"identity\" file (RSA Key)"
ssh -i ./deploy_key "$USERNAME"@"$SERVER_ADDRESS" pwd

echo "\nconnectivity test has been completed successfully!"
