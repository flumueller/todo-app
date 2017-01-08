var {ObjectID} = require('mongodb');

var {mongoose} = require('./../server/db/mongoose');
var {Todo} = require('./../server/models/todo');
var {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
// 	console.log(result);
// });

// Todo.findOneAndRemove()
// Todo.findByIdAndRemove()

// Todo.findOneAndRemove({_id: '58727b8d017a32fa01ad212e'}).then((todo) => {
// 	console.log(todo);
// });

// Todo.findByIdAndRemove('58727b8d017a32fa01ad212e').then((todo) => {
// 	console.log(todo);
// });