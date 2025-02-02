export default {
  apps: [
    {
      name: "slowboat",
      port: 3000,
      exec_mode: "cluster",
      instances: "max",
      script: "./.output/server/index.mjs", // ต้องมีไฟล์นี้
      env: {
        NODE_ENV: "production"
      }
    }
  ]
};