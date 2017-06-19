var myApp = angular.module('myApp', []);

myApp.controller('messagesController', function($http, messagesService) {
  console.log('inside controller');
  var vm = this;
  vm.messages = [];
  //new message
  vm.newMessage = function() {
    console.log('in newMessage');
    var messageToAdd = {
      username: vm.usernameIn,
      message: vm.messageIn
    }; //end peepToAdd
    messagesService.addMessage(messageToAdd);
  };
  //post info

  vm.messagesController = function() {
    console.log('in messagesInfo');
    messagesService.getMessage().then(function() {
      vm.messages = messagesService.allMessages.data;
    });
  }; //end post info
}); //end controller
