function config_app(app) {
    // Configurar a pasta dos estáticos
    app.use(express.static('./src/static'))

    // Parse dos dados de formulários
    app.use(express.urlencoded({ extended: false }))

    // Parse dos jsons
    app.use(express.json())
}

module.exports = {
    config_app: config_app
}