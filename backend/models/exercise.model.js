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
        type: Number,
        required: true
    },
    date: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});

// const Exercise = mongoose.model('Exercise', exerciseSchema);
// module.exports = Exercise;
 module.exports=mongoose.model('exercice', exerciseSchema)
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);