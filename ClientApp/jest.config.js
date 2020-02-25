// jest.config.js
module.exports = {
    verbose: true,
    transform: {
        "^.+\\.js?$": "babel-jest"
    },
    "moduleNameMapper": {
        "\\.(scss|sass|css)$": "identity-obj-proxy"
    }
};