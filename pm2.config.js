module.exports = {
    apps : [
        {
          name: "ekranas",
          script: "./build/app.js",
          autorestart: true,
          watch: true,
          env: {
              "NODE_ENV": "production"
          }
        }
    ]
}