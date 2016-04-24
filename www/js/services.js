angular.module('starter.services', [])

.factory('Item', function() {
    
  var data = { items: []}; // variable for users input to be added to an empty checklist
  
  function addItem(name) { // function adding infor from user input to checklist
    data.items.push({name: name, date: new Date()}); // adding name of task, date added and time
  }
  
  return {data: data, addItem: addItem}; // returning the correct values of the users input
});