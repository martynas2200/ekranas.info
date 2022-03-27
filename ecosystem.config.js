module.exports = {
    apps: [{
        name: 'API',
        script: 'build/index.js',
        instances: 1,
        watch: false,
        max_memory_restart: '1G',
        env: {
            NODE_ENV: 'production'
        },
        env_production: {
            NODE_ENV: 'production'
        }
    }],
};