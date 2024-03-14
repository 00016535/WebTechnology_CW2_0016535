const fs = require('fs')

// access global mock db file
const recipe = require(global.mock_db)

// write service method implementations
const recipe_service = {
    getAll() {
        return recipe
    },
    getById(id) {
        return recipe.find(t => t.id == id)
    },    
    create(req, res) {
        let new_id = genRandId(4)
                
        const recipe = req.body
        const new_recipe = {
            id: new_id,
            recipe: recipe
        }

        recipe.push(new_recipe)
        
        writeToFile(recipe)
        
        return new_recipe
    },
    update(id, updateData){
        const recipeIndex = recipe.findIndex(t => t.id == id)

        if (recipeIndex === -1) {
            return null
        }

        recipe[recipeIndex].recipe = { ...recipes[recipeIndex].recipe, ...updateData }

        writeToFile(recipe)

        return recipe[recipeIndex]
    },
    delete(id) {
        const index = recipe.findIndex(u => u.id == id)
        recipe.splice(index, 1)    
        writeToFile(recipe)
    }
}

// create function for overwriting the db file updated db content
let writeToFile = async (users) => {
    await 
        fs.writeFileSync(
            global.mock_db,
            JSON.stringify(
                users, null, 4
            ),
            'utf8'
        )
}


module.exports = recipe_service

