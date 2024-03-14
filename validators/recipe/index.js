const { body, param } = require('express-validator');
const recipe_service = require('../../services/recipe')

const addRecipeValidation = () => {
  return [
    body('recipeName')
    .notEmpty().withMessage('Recipe name must not be empty')
    .isLength({ min: 8, max: 255 }).withMessage('Recipe name must be between 8 and 255 characters long'),
  body('ingredients')
    .notEmpty().withMessage('Recipe ingredients must not be empty'),
  body('stages')
    .notEmpty().withMessage('Stages must not be empty'),      
];
};

const deleteRecipeValidation = () => {
return [
  param('id').custom(async (id) => {
    const exists = await recipe_service.getById(id);
    if (!exists) {
      throw new Error('Recipe not found');
    }
  })
];
};

const updateRecipeValidation = () => {
return [
  param('id').custom(async (id) => {
    const exists = await recipe_service.getById(id);
    if (!exists) {
      throw new Error('Recipe not found');
    }
  }),
  body('recipeName')
    .notEmpty().withMessage('Recipe name must not be empty')
    .isLength({ min: 8, max: 255 }).withMessage('Recipe name must be between 8 and 255 characters long'),
  body('ingredients')
  .notEmpty().withMessage('Recipe ingredients must not be empty'),
  body('stages')
    .notEmpty().withMessage('Stages must not be empty'),      
];
};

module.exports = {
  addRecipeValidation,
  updateRecipeValidation,
  deleteRecipeValidation
};

