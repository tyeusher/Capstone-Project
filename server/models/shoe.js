
//the model of scheme
const mongoose = require("mongoose");

const shoeSchema = new mongoose.Schema({//using mongoose to create a new schema
  greenLaces: String,
  extraSocks: String,
  shoePolisher: String,
  bottomGripClay: String,
  coloredLaces: [String]
});

const Shoe = mongoose.model('Shoe', shoeSchema);//shporting out model we just made

module.exports = {
  model: Shoe,//exporting the entire model that was created
  schema: shoeSchema
};
