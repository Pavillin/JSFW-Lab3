var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Example' });
});

const persons = [
  {
    path: 'dylan',
    name: 'Dylan Sprague',
    age: 20,
    likes: "video games, programming, and my doggo",
    dislikes: "people who send \"Streaks\" snapchats"
  },
  {
    path: 'hannah',
    name: 'Hannah Sprague',
    age: 16,
    likes: "doing nothing",
    dislikes: "doing something",
    relation: 'Sister'
  },
  {
    path: 'chris',
    name: 'Chris Sprague',
    age: 52,
    likes: "hockey and the gym",
    dislikes: "when people steal my shaker cups at the gym",
    relation: 'Dad'
  },
  {
    path: 'karen',
    name: 'Karen Stewart',
    age: 48,
    likes: "cleaning the house 24/7",
    dislikes: "when there's a spec of dust anywhere in my house",
    relation: 'Mom'
  }
]

router.get('/:name', (req,res,next) =>{
  const name = req.params.name;
  const person = persons.find(per => per.path === name);

  //throw error if person doesn't exist
  if(!person){
    return next(new Error('Person doesn\'t exist'))
  }

  //pass person to the person view
  res.render('person', person);
})

module.exports = router;
