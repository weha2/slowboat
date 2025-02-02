export default {
  apps: [
    {
      name: "slowboat",
      port: 3000,
      exec_mode: "cluster",
      instances: "max",
      // script: "./.output/server/index.mjs", // ต้องมีไฟล์นี้
      script: "/home/slowboat-laos/htdocs/slowboat-laos.com/.output/server/index.mjs",
      env: {
        NODE_ENV: "production"
      }
    }
  ]
};