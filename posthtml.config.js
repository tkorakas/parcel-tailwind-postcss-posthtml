module.exports = {
    plugins: [
        require('posthtml-include')({ root: './' }),
        require('posthtml-expressions')({}),
    ],
}