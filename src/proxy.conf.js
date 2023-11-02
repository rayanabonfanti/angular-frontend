const PROXY_CONFIG = [
    {
        context: ['/serverBasicAuth'],
        target: 'http://localhost:8090/',
        //target: 'https://basic-auth-spring-boot.azurewebsites.net/',        
        secure: false,
        logLevel: 'debug',
        pathRewrite: {'^/serverBasicAuth': ''},
        changeOrigin: true
    }
];

module.exports = PROXY_CONFIG;
