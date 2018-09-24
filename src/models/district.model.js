const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let DistrictSchema = new Schema({
    DistrictId: {type: Number, required: true, max: 100},
    StateId: {type: Number, required: true},
    Name: {type: String, required: true, max: 100},
});


// Export the model
module.exports = mongoose.model('District', DistrictSchema);