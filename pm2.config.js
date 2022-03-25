module.exports = {
    apps : [
        {
          name: "ekranas",
          script: "./build/index.js",
          autorestart: true,
          watch: true,
          env: {
              "NODE_ENV": "production"
          }
        }
    ]
}