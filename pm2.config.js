module.exports = {
    apps : [
        {
          name: "ekranas",
          script: "./app.js",
          watch: true,
          env: {
              "NODE_ENV": "production"
          }
        }
    ]
}