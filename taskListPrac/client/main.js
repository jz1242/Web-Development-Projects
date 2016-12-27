Session.setDefault("sortOrder", 1);
Template.todoList.helpers({
  todos: function() {
    return Todos.find({}, {sort: {createdAt:Session.get("sortOrder")}});
  },
  done: function(){
  	return Todos.findOne({_id: this._id}).done;
  }
});

Template.todoList.events({
  "click input": function(event){
  	var isDone = Todos.findOne({_id: this._id}).done;
  	Todos.update({_id: this._id}, {$set: {done: !isDone}})
  },
  "click .delete": function() {
  	Todos.remove({_id: this._id});
  },
  "click #reverse": function(){
  	Session.set("sortOrder", Session.get("sortOrder") * -1);
  },
});
