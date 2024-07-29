const path = require('path');

module.exports = {
    resolve: {
        fallback: {
            "stream": require.resolve("stream-browserify"),
            "util": require.resolve("util/"),
            "buffer": require.resolve("buffer/")
        }
    },
    // Add other configuration options here
    module: {
        rules: [
            {
                test: /\.m?js/,
                resolve: {
                    fullySpecified: false
                }
            }
        ]
    }
};
