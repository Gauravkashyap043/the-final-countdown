const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://Gaurav:Gaur123@cluster0.33row.mongodb.net/teachersandclasses?retryWrites=true&w=majority",
  );
};