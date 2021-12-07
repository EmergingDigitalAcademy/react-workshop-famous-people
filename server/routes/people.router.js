const router = require('express').Router();
const people = require('../modules/people');

router.get('/', (req, res) => res.send(people));

router.post('/', (req, res) => {
    console.log('POST req.body', req.body);
    let person = req.body;
    if (!person.name || !person.role) {
      res.sendStatus(400); // bad request
      return;
    }
    people.push({...person, id: parseInt(Math.random()*10000+1)});
    res.sendStatus(201);
});

module.exports = router;