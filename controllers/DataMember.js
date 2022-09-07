const DataMember = require('../models/DataMember');
class DataMemberController {
    static create(req, res, next) {
        let createObj = {}
        
        const keys = Object.keys(req.body)
        //loop the keys, add existing keys from req.body
        keys.forEach(el => {
            createObj[el] = req.body[el]
        })

        createObj.created = new Date()
        createObj.updated = new Date()

        DataMember.create(createObj)
            .then(created => {
                res.status(201);
            })
            .catch(err => {
                next(err)
            })
    }

    static findOne(req, res, next) {
        const { id } = req.params

        DataMember.findOne({_id: id})
            .then(dataMemberFindOne => {
                if(!dataMemberFindOne) {
                    const err = {
                        message: 'not found',
                        status: 404,
                    }
                    next(err)
                } else {
                    res.status(200).json({
                        dataMember: dataMemberFindOne,
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

        if(req.query.search) {
            let search = new RegExp(req.query.search)
            query = { $or: [
                {name: { $regex: search, $options: 'i' }}, 
                {role: { $regex: search, $options: 'i' }}, 
            ]}
        }

        DataMember.find(query)
            .then(dataMemberFindAll => {
                if(dataMemberFindAll.length === 0) {
                    res.status(200).json({
                        message: 'No data yet'
                    })
                } else {
                    res.status(200).json({
                        dataMembers: dataMemberFindAll,
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
 
        DataMember.findOneAndUpdate({ _id: id }, updateObj, { new: true })
            .then(dataMemberUpdated => {
                res.status(201).json({
                    message: 'success',
                    updatedDataMember: dataMemberUpdated,
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

        DataMember.findOneAndUpdate({ _id: id }, updateObj, { new:true })
            .then(dataMemberUpdated => {
                res.status(201).json({
                    message: 'success',
                    updatedDataMember: dataMemberUpdated,
                })
            })
            .catch(err => {
                next(err);
            })
    }

    static deleteOne(req,res, next) {
        const { id } = req.params
        
        DataMember.findOneAndDelete({ _id: id })
            .then(dataMemberDeleted => {
                res.status(200).json({
                    message: 'success',
                })
            })
            .catch(err => {
                next(err)
            })
    }

}
module.exports = DataMemberController