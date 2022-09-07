const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const dataMemberSchema = new Schema({
    name: { type: String },
    role: { type: String },
    created: {
        type: Date,
    },
    updated: {
        type: Date,
    },
});
const DataMember = mongoose.model('DataMember', dataMemberSchema)
module.exports = DataMember