angular.module('starter.controllers', [])


.controller('To-DoCtrl', function($scope, Item) { // creating function in To-Do template
    
    
    $scope.data = Item.data; // Making the $scope equal to Item.data
    $scope.showDelete = false;// Shows Delete toggle as false to begin with
    $scope.onItemDelete = function(item){}; // Function for Delete button to work
})

.controller('Add-ItemsCtrl', function($scope, Item) { // function to add item
    
  var data = { newItem: "" }; // variable for new item where user enters task they intend to do
  
  function addItem() { // function for adding the users input
    Item.addItem(data.newItem); // add the users input into a list
    data.newItem = ""; // When a task is added this clears the text input to allow another input by the user
  } 
  
  $scope.data = data; // Making $scope equal to data so above function will work correctly
  $scope.addItem = addItem; // Making $scope equal to addItem so above function will work correctly
});