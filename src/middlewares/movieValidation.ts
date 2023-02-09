import { body } from 'express-validator'

export const movieCreateValidation = () => {
  return [
    body('title')
      .isString()
      .withMessage('O título é obrigatório.')
      .isLength({ min: 5 })
      .withMessage('O título deve ter no mínimo 5 caracteres.'),

    body('rating')
      .isNumeric()
      .withMessage('A nota é obrigatória.')
      .custom((value: number) => {
        if (value < 0 || value > 10) {
          throw new Error('A nota precisa ser ente 0 e 10')
        }

        return true
      }),

    body('description')
      .isString()
      .withMessage('A descrição é obrigatória.'),

    body('director')
      .isString()
      .withMessage('O diretor é obrigatório.'),

    body('poster')
      .isURL()
      .withMessage('A imagem precisa ser uma url.')
  ]
}