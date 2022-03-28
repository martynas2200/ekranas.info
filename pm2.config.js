module.exports = {
    apps : [
        {
          name: "ekranas",
          script: "./build/index.js",
          watch: false,
          env: {
              "NODE_ENV": "production",
              "DB_USER": "samareql",
              "DB_PASS": "9stRbZHxw!",
              "DB_NAME": "ekranas",
              "SENDING_BLUE_USER": "martynas2200@gmail.com",
              "SENDING_BLUE_PASS": "bhV53CFHwg08PKzr"
          }
        }
    ]
}