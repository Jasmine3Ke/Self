module.exports = {
    publicPath: '/Self/',

    chainWebpack: config => {
        config.module.rules.delete('eslint');
    }
}