const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const todoSchema = new Schema({
    name: { type: String },
    status: { type: String },
    created: {
        type: Date,
    },
    updated: {
        type: Date,
    },
    refId: {
        type: Schema.Types.ObjectId, ref: 'DataMember'
    },
});
const Todo = mongoose.model('Todo', todoSchema)
module.exports = Todo