const mongoose = require('mongoose');
const exerciseSchema = mongoose.Schema({
    _id:Number,
    username: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

// const Exercise = mongoose.model('Exercise', exerciseSchema);
// module.exports = Exercise;
 module.exports=mongoose.model('exercise', exerciseSchema)
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);