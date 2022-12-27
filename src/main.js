const { init_template_engine } = require('./ext/template_engine.js')
const { init_routes } = require('./routes/init.js')

const express = require('express')

function create_app() {
    const app = express()
    init_template_engine(app)
    init_routes(app)
    return app
}

module.exports = {
    create_app: create_app
}