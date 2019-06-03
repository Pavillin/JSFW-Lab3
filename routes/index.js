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
    age: 20
  },
  {
    path: 'hannah',
    name: 'Hannah Sprague',
    age: 16,
    relation: 'Sister'
  },
  {
    path: 'chris',
    name: 'Chris Sprague',
    age: 52,
    relation: 'Dad'
  },
  {
    path: 'karen',
    name: 'Karen Stewart',
    age: 48,
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
