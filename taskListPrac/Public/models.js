Todos = new Mongo.Collection("todos");
TodosSchema = new SimpleSchema({
	label:{
		type: String,
		max: 200
	},
	createdAt: {
		type: Date,
		defaultValue: new Date()
	}
});

Todos.attachSchema(TodosSchema);