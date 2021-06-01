const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const requestSchema = new Schema(
  {
    username: {type: String, required: true},
    problem: {type: String, required: true},
    amount: {type: Number, required: true},
    img: {data: Buffer, contentType: String},
  },
  {
    timestamps: true,
  },
);

const Request = mongoose.model('Request', requestSchema);

module.exports = Request;
