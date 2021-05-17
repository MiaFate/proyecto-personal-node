const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  name: { type: String, required: true },
  imgUrl: { type: String, required: true },
  description: { type: String, required: true },
  repo: { type: String, required: true },
  demo: { type: String, required: true },
});

module.exports = mongoose.model("proyect", TaskSchema);
