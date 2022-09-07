const router = require('express').Router()
const dataMemberRouter = require('./dataMember')
const todoRouter = require('./todo')

router.use('/dataMembers', dataMemberRouter)
router.use('/todos', todoRouter) 

const err = {
    status: 404,
    message: 'not found 404'
}
router.get('/*', (req, res, next) => {
    next(err);
})
router.post('/*', (req, res, next) => {
    next(err);
})
router.put('/*', (req, res, next) => {
    next(err);
})
router.patch('/*', (req, res, next) => {
    next(err);
})
router.delete('/*', (req, res, next) => {
    next(err);
})

module.exports = router