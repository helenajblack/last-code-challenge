myApp.service('messagesService', function($http) {
  var sv = this;

  //add messages
  sv.addMessage = function(newMessage) {
    console.log('in addMessage', newMessage);
    $http({
      method: 'POST',
      url: '/messages/post',
      data: newMessage
    });
  }; //end add messages

  //get messages
  sv.getMessages = function() {
    console.log('in service getMessages');
    return $http({
      method: 'GET',
      url: '/messages/get'
    }).then(function(response) {
      console.log('in service, back from server with:', response);
      return response.data;
    });
  };
});
