module.exports = global.config = {
    BASE_URL : "http://34.116.165.172:8085/time-tracker"
    // other global config variables you wish
};

module.exports = (on, config) => {
    on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.name === 'chrome' || browser.name === 'edge') {
            launchOptions.args.push('--disable-features=SameSiteByDefaultCookies') 
            return launchOptions
        }
    })
}