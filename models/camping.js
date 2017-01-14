var restful = require('node-restful');
var mongoose = restful.mongoose;

var campingSchema = new mongoose.Schema({
    name: String,
    phone: Number,
    email: String,
    adress: String,
    location: {
        lat: Number,
        lon: Number
    }
});

module.exports = restful.model('camping', campingSchema);