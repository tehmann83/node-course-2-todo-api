const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js');
const {User} = require('./../server/models/user.js');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove({_id: '5b2fb1aca661bea09daea3a5'}).then((result) => {
//
// });

Todo.findByIdAndRemove('5b2fb1aca661bea09daea3a5').then((todo) => {
  console.log(todo);
});
