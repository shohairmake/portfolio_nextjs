const withImages = require('next-images')
require('dotenv').config()

module.exports = withImages({
    env: {
        API_KEY: process.env.API_KEY,
        API_END_POINT: process.env.API_END_POINT,
        WRITE_API_KEY: process.env.WRITE_API_KEY,
    },
})
