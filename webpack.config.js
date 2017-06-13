module.exports = {
    entry: './main.ts',
    output: {
        filename: 'main.js',
        path: __dirname
    },
    watch: true,
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            }
        ]
    },
    resolve: {
        extensions: [".ts"]
    },
};