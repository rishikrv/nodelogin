const mongoose = require("mongoose");

const Warehouse = mongoose.model(
  "Warehouse",
  new mongoose.Schema({
    warehouse: String,
    id: String,
    
  })
);

module.exports = Warehouse;
