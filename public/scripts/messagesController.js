var myApp = angular.module('myApp', []);

myApp.controller('messagesController', function($http, messagesService) {
  console.log('inside controller');
  var vm = this;
  vm.messages = [];
  //new message
  vm.newMessage = function() {
    console.log('in newMessage');
    var messageToAdd = {
      username: vm.username,
      message: vm.message
    }; //end peepToAdd
    messagesService.addMessage(messageToAdd);
  };
  //post info

  vm.goGetMyMessages = function() {
    console.log('in messagesInfo');
    messagesService.getMessages().then(function(data) {
      vm.messages = data;
      console.log(vm.messages);
    });
  }; //end post info
}); //end controller
