const express = require('express');
const bodyParser = require('body-parser');

let {mongoose} = require('./db/mongoose.js');
let {Todo} = require('./models/todo');
let {User} = require('./models/user');

let app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  //console.log(req.body);
  let todo = new Todo({
    text: req.body.text
  });

  todo.save().then( (doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  });
});

app.listen(3000, () => {
  console.log(`Started on port 3000`);
});

module.exports = {app};












/* +++++++++++ examples  ++++++++++
let newTodo2 = new Todo({
  text: 'Edit this file'
});

newTodo2.save().then((doc) => {
  console.log('Saved todo', doc)
}, (err) => {
  console.log('Unable to save todo');
});


let newUser = new User({
  email: 'ehmannth@gmail.com'
});

newUser.save().then((doc) => {
  console.log('Saved user', doc)
}, (err) => {
  console.log('Unable to save user');

});
*/
