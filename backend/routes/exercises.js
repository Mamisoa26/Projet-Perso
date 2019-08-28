const router = require('express').Router();
let Exercise = require('../models/exercise.model');

router.route('/').get((req, res) => {
    Exercise.find()
        .then(exercises => res.json(exercises))
        .catch(err => res.status(400).json('Error: ', + err))
})

router.route('/add').post((req, res) => {
    
    Exercise.find()
    .then(exercises => {
        console.log('exo:', exercises);
        var id;
        if(exercises.length==0){
         id=0
        }
        else{
            id=exercises[exercises.length-1]._id+1
        }
        const username = req.body.username;
        const description = req.body.description;
        const duration = req.body.duration;
        const date = req.body.date;
        console.log(req.body);
    
        const newExercise = new Exercise({
            _id:id,
            username:username,
           description: description,
           duration: duration,
           date: date,
        });
        newExercise.save()
            .then(() => res.json('Successfull'))
            .catch(err => res.status(400).json('Error: ' + err))
    }); 
    })
    

router.route('/:id').get((req, res) => {
    Exercise.findById(req.params.id)
        .then(exercise => res.json(exercise))
        .catch(err => res.status(400).json('Error: ', + err))
})

router.route('/:id').delete((req, res) => {
    Exercise.findByIdAndDelete(req.params.id)
        .then(() => res.json('Deleted Successfully'))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/update/:id').post((req, res) => {
    Exercise.findById(req.params.id)
        .then(exercise => {
            exercise.username = req.body.username;
            exercise.description = req.body.description;
            exercise.duration = req.body.duration;
            exercise.date = req.body.date;
            exercise.save()
                .then(() => res.json('Exersice Updated!'))
                .catch(err => res.status(400).json('Error: ' + err))
        })
    .catch(err => res.status(400).json('Error: '+ err));
})

module.exports = router;