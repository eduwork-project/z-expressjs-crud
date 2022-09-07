const Todo = require('../models/Todo');
class TodoController {
    static create(req, res, next) {
        let createObj = {}
        
        const keys = Object.keys(req.body)
        //loop the keys, add existing keys from req.body
        keys.forEach(el => {
            createObj[el] = req.body[el]
        })

        createObj.created = new Date()
        createObj.updated = new Date()

        Todo.create(createObj)
            .then(created => {
                res.status(201);
            })
            .catch(err => {
                next(err)
            })
    }

    static findOne(req, res, next) {
        const { id } = req.params
        const { populateUser } = req.query

        Todo.findOne({_id: id})
            .populate({
                path: populateUser === 'true' ? 'refId' : '',
                select: populateUser && ['_id', 'name', 'role']
            })
            .then(todoFindOne => {
                if(!todoFindOne) {
                    const err = {
                        message: 'not found',
                        status: 404,
                    }
                    next(err)
                } else {
                    res.status(200).json({
                        todo: todoFindOne,
                        message: 'success'
                    })
                }
            })
            .catch(err => {
                next(err)
            })
    }

    static findAll(req, res, next) {
        let query = {};
        const { populateUser } = req.query

        if(req.query.search) {
            let search = new RegExp(req.query.search)
            query = { $or: [
                { name: { $regex: search, $options: 'i' } }, 
                { status: { $regex: search, $options: 'i' } }, 
            ]}
        }

        Todo.find(query)
            .populate({
                path: populateUser === 'true' ? 'refId' : '',
                select: populateUser && ['_id', 'name', 'role']
            })
            .then(todoFindAll => {
                if(todoFindAll.length === 0) {
                    res.status(200).json({
                        message: 'No data yet'
                    })
                } else {
                    res.status(200).json({
                        todos: todoFindAll,
                        message: 'success'
                    })
                }
            })
            .catch(err => {
                next(err)
            })
    }

    static updateOnePatch(req, res, next) {
        const { id } = req.params
        let updateObj = {}
        const keys = Object.keys(req.body)
        //loop the keys, add existing keys from req.body
        keys.forEach(el => {
            updateObj[el] = req.body[el]
        })
        updateObj.updated = new Date()
 
        Todo.findOneAndUpdate({ _id: id }, updateObj, { new: true })
            .then(todoUpdated => {
                res.status(201).json({
                    message: 'success',
                    updatedTodo: todoUpdated,
                })
            })
            .catch(err => {
                next(err);
            })
    }

    static updateOnePut(req, res, next) {
        const { id } = req.params
        let updateObj = {}
        const keys = Object.keys(req.body)
        //loop the keys, add existing keys from req.body
        keys.forEach(el => {
            updateObj[el] = req.body[el]
        })
        updateObj.updated = new Date()

        Todo.findOneAndUpdate({ _id: id }, updateObj, { new: true })
            .then(todoUpdated => {
                res.status(201).json({
                    message: 'success',
                    updatedTodo: todoUpdated,
                })
            })
            .catch(err => {
                next(err);
            })
    }

    static deleteOne(req,res, next) {
        const { id } = req.params
        
        Todo.findOneAndDelete({ _id: id })
            .then(todoDeleted => {
                res.status(200).json({
                    message: 'success',
                })
            })
            .catch(err => {
                next(err)
            })
    }

}
module.exports = TodoController