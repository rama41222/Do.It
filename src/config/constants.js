const devConfig = {
    MONGO_URL: 'mongodb://root:pass123@ds161026.mlab.com:61026/alexa-api-doit',
}

const prodConfig = {
    MONGO_URL: 'mongodb://root:pass123@ds161026.mlab.com:61026/alexa-api-doit',
}

const testConfig = {
    MONGO_URL: 'mongodb://root:pass123@ds161026.mlab.com:61026/alexa-api-doit',
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