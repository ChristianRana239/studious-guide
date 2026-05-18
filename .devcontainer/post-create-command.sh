#!/bin/bash

LOG_FILE=post-create-command.sh.log

rm -Rf $LOG_FILE

touch $LOG_FILE

echo "post-create-command.sh $(date) - start" >> $LOG_FILE

echo "post-create-command.sh $(date) - sudo apt update" >> $LOG_FILE
sudo apt-get update >> $LOG_FILE

echo "post-create-command.sh $(date) - sudo apt install git-lfs" >> $LOG_FILE
sudo apt-get install git-lfs >> $LOG_FILE

echo "post-create-command.sh $(date) - git lfs install" >> $LOG_FILE
git lfs install >> $LOG_FILE

echo "post-create-command.sh $(date) - npm install" >> $LOG_FILE
npm install >> $LOG_FILE

echo "post-create-command.sh $(date) - npm run vendor" >> $LOG_FILE
npm run vendor >> $LOG_FILE

echo "post-create-command.sh $(date) - end" >> $LOG_FILE
