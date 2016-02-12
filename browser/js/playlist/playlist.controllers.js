'use strict';

/* ARTISTS (PLURAL) CONTROLLER */

juke.controller('PlaylistsCtrl', function ($scope, $state, $log, PlaylistFactory, $rootScope) {

  $scope.inputType = "anything";
  $scope.playlistName = "something";


  $scope.submit = function(event){
    event.preventDefault();
    console.log($scope.playlistForm.playlistNameInput.$viewValue);
    console.log($scope.playlistName);

    var plObj = {name: $scope.playlistName};


    PlaylistFactory.create(plObj)
    .then(function(playlist){
      $scope.playlistName = "";
      $state.go('playlist',{id: playlist._id});
    });

  }
});


