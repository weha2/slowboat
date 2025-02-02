#!/bin/bash
# run : chmod +x deploy.sh
# run : ./deploy.sh

# 1. ดึงโค้ดล่าสุด
git pull

# 2. ติดตั้ง dependencies
yarn install

# 3. Build Nuxt.js
NODE_OPTIONS="--max-old-space-size=1024" yarn build

# 4. Reload PM2
pm2 reload ecosystem.config.cjs --env production