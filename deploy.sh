#!/bin/bash

# 1. ดึงโค้ดล่าสุด (ถ้าใช้ Git)
git pull

# 2. ติดตั้ง dependencies
yarn install # หรือใช้ npm install / yarn install

# 3. Build Nuxt.js
NODE_OPTIONS="--max-old-space-size=512" yarn build # หรือ npm run build / yarn build

# 4. Reload PM2
pm2 reload ecosystem.config.js --env production