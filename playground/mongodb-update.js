//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server');
/*
  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5b29f0e54168a2b90c15c37e')
  }, {
    $set : {
      completed: true
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });
*/
  db.collection('Users').findOneAndUpdate({
    _id: 123
  },{
    $set: {
      name: 'Thomas'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((res) => {
    console.log(res);
  })

  //db.close();
});
