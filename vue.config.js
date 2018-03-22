module.exports = {
    // If extractCSS is always true, the 'Hot module replacement' will not work.
    extractCSS: process.env.NODE_ENV === 'production'
};