angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Messenger Bag',
    lastText: 'Christopher Droom',
    face: '72.50'
  }, {
    id: 1,
    name: 'GoPro helmet attachment',
    lastText: 'Larry Flintstone',
    face: '50.00'
  },{
    id: 2,
    name: 'Microscope',
    lastText: 'Molly Bucket',
    face: '22.90'
  }, {
    id: 3,
    name: 'Second Edition Moby Dick novel',
    lastText: 'Eric Millhouse',
    face: '98.00'
  }, {
    id: 4,
    name: 'Anniversary Glassware',
    lastText: 'Max Power',
    face: '120.60'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
