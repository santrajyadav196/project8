const mongoose = require('mongoose');


const testSchema = new mongoose.Schema({
    name: String,
    email: String,
    testScore: {
        round_first: Number,
        round_second: Number,
        round_third: Number,
    }
});

const Test = mongoose.model('Test', testSchema);

module.exports = Test;