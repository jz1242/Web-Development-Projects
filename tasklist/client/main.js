

import './main.html';
Tasks = new Mongo.Collection('tasks');

Meteor.subscribe('tasks');

Template.tasks.helpers({
  tasks: function() {
    return Tasks.find({}, {sort: {createdAt: -1}});
  }
});

Template.tasks.events({
  "submit .add-task": function(event){
  	var name = event.target.name.value;
    Tasks.insert({
      name: name,
      createdAt: new Date(),
      userId: Meteor.userId()
    });
  	event.target.name.value = '';
  	return false;
  },
  "click .delete-task": function(event){
    if(confirm('Delete Task?')){
      Tasks.remove(this._id);    }
    return false;
  }
});


