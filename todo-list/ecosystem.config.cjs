module.exports = {
    apps: [{
      name: 'mern-app',
      script: './server/index.js', // Your entry point
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      }
    }]
  };
  