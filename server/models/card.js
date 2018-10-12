const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CardSchema = new Schema ({
  type: String,
  name_short: String,
  name: String,
  value: String,
  value_int: Number,
  suit: String,
  meaning_up: String,
  meaning_rev: String,
  desc: String,
  img_url: String
})
module.exports = mongoose.model('Card', CardSchema)
