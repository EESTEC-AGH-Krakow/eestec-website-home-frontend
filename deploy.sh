#!/bin/bash

LOCATION=$1

scp -r ./dist "$USERNAME"@"$SERVER_ADDRESS":~"$LOCATION"
