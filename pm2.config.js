module.exports = {
    apps : [
        {
          name: "ekranas",
          script: "./build/index.js",
          watch: false,
          env: {
              "NODE_ENV": "production"
          }
        }
    ]
}