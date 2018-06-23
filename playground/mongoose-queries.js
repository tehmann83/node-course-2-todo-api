const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js');
const {User} = require('./../server/models/user.js');

let userId = '5b2a80717c0f3ccc0cce914d';

User.findById(userId).then((user) => {
  if (!user) return console.log('User not found');
  console.log(JSON.stringify(user, undefined, 2));
}).catch((err) => {
  console.log(err);
});


// let id = '5b2d2cdce6bcf6d431611efc1';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }
//
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log(`Todos: ${todos}`);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log(`Todo: ${todo}`);
// });
//
// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log(`Todo by Id: ${todo}`);
// }).catch((e) => {
//   console.log(e);
// });
