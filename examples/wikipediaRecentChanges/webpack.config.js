module.exports = {
    output:{
        path:__dirname+'/public/dist'
    },
    module: {
        rules: [
            {
                test: /\.mpts$/,
                loader: "mpts-loader",
            },
        ],
    },
};