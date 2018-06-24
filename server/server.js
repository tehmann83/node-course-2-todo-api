const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

let {mongoose} = require('./db/mongoose.js');
let {Todo} = require('./models/todo');
let {User} = require('./models/user');

let app = express();
const port = process.env.PORT || 3000;

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

// GET /todos/1234123
app.get('/todos/:id', (req, res) => {
  let id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Todo.findById(id).then((todo) => {
    if (!todo) {
      return res.status(404).send();
    }

    res.status(200).send({todo});
  }).catch((e) => {
    res.status(400).send();
  });
});

app.delete('/todos/:id', (req, res) => {
  let id = req.params.id;

  if (!ObjectID.isValid(id)) return res.status(404).send();

  Todo.findByIdAndRemove(id).then((todo) => {
    //console.log(todo);
    if (!todo) return res.status(404).send();
    else return res.status(200).send({todo});
  }).catch((e) => {
    res.status(400).send();
  });
});

app.listen(port, () => {
  console.log(`Started up at port ${port}`);
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
