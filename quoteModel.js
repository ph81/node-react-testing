let mongoose = require('mongoose');

// Setup schema
const quoteSchema = mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    character: {
        type: String,
        required: true
    },
    episode: {
        type: String,
        required: true
    },
    season: {
        type: Number,
        required: true
    }
});

// Exporting model
let Quote = module.exports = mongoose.model('quote', quoteSchema);

module.exports.get = function(callback, limit) {
    Quote.find(callback).limit(limit);
}

