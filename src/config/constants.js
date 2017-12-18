const devConfig = {
    MONGO_URL: 'mongodb://localhost/doit-dev',
}

const prodConfig = {
    MONGO_URL: 'mongodb://localhost/doit-prod',
}

const testConfig = {
    MONGO_URL: 'mongodb://localhost/doit-test',
}

const defaultConfig = {
    PORT: process.env.PORT || 8080
}

function getConfig(env) {
    switch (env) {
        case 'development':
            return devConfig
        case 'test':
            return testConfig
        default:
            return prodConfig
    }
}

export default {
    ...defaultConfig,
...getConfig(process.env.NODE_ENV),
}