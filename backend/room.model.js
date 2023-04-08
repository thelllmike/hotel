/* eslint-disable no-undef */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


Room = new Schema({
    rId: {
        type: String
    },
    rType: {
        type: String
    },
    bType: {
        type: String
    },
    pnumber: {
        type: String
    }
    ,
    email: {
        type: String
    }
 
 },
  {
    collation: 'room'
});

module.exports = mongoose.model('Room',Room);