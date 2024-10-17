const db = require('./database/setup'); // Do not edit/remove this line

// Create todo with name and priority (done = false by default)
function createTodo(name, priority) {
	const newTodo = new db({
		name: name,
		priority: priority,
		done: false,
	});

	newTodo.save().then(() => {
		// Display created todo
		db.findOne({ name: name }).then(data => {
			console.log(data);
		});
	});
}


// Complete one todo by name (update done = true)
function completeTodo(name) {
	db.updateOne({ name: name }, { done: true }).then(() => {
		// Display updated todo
		db.findOne({ name: name }).then(data => {
			console.log(data);
		});
	});
}


// Delete one todo by name
function deleteTodo(name) {
	db.deleteOne({ name: name }).then(() => {
		// Display all todos
		db.find().then(data => {
			console.log(data);
		});
	});
}

module.exports = { createTodo, completeTodo, deleteTodo }; // Do not edit/remove this line
