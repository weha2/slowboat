module.exports = {
  apps: [
    {
      name: 'slowboat',
      exec_mode: 'cluster',
      instances: 'max',
      script: 'dist/src/main.js',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
