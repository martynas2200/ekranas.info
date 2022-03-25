module.exports = {
    apps : [
        {
          name: "ekranas",
          script: "./build/app.js",
          watch: true,
          env: {
              "NODE_ENV": "production"
          }
        }
    ]
}