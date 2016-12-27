import { Meteor } from 'meteor/meteor';
Tasks = new Mongo.Collection('tasks');
Meteor.startup(() => {
  // code to run on server at startup
});

