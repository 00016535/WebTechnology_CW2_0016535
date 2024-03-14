// import specific service class
const recipe_service = require('../../../services/recipe')

// mention the service's needed actions (methods)
const recipe_controller = {
    getAll(req, res) {
        res.json(recipe_service.getAll())
    },
    create(req, res) {
        res.status(201).json(
            recipe_service.create(req, res)
        )
    },
    update(req, res) {
        const recipe = recipe_service.update(req.params.id, req.body)
        
        if (recipe) {
            res.json(recipe)
        } else {
            res.status(404).send('Recipe not found')
        }
    },
    delete(req, res) {
        const recipe = recipe_service.getById(req.params.id)
        
        if (recipe) {
            recipe_service.delete(req.params.id)
            res.status(204).send('Recipe deleted successfully')
        } else {
            res.status(404).send('Recipe not found')
        }
    }
}

module.exports = recipe_controller
