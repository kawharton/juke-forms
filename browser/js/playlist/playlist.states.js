'use strict';

juke.config(function ($stateProvider) {

  $stateProvider.state('playlistMaker', {
    url: '/playlistmaker',
    templateUrl: '/js/playlist/templates/playlistmaker.html',
    controller: 'PlaylistsCtrl'
    // resolve: {
    //   allArtists: function (ArtistFactory) {
    //     return ArtistFactory.fetchAll();
    //   }
    // }
  });

   $stateProvider.state('playlist', {
    url: '/playlist/:id',
    templateUrl: '/js/playlist/templates/playlist.html',
    controller: function($scope, $stateParams, PlayerFactory, PlaylistFactory, playlist) { 

      $scope.playlist = playlist;

      $scope.toggle = function (song) {
        if (song !== PlayerFactory.getCurrentSong()) {
          PlayerFactory.start(song, $scope.playlist.songs);
        } else if ( PlayerFactory.isPlaying() ) {
          PlayerFactory.pause();
        } else {
          PlayerFactory.resume();
        }
      };

      $scope.getCurrentSong = function () {
        return PlayerFactory.getCurrentSong();
      };

      $scope.isPlaying = function (song) {
        return PlayerFactory.isPlaying() && PlayerFactory.getCurrentSong() === song;
      };
    },
    resolve: {
      playlist: function (PlaylistFactory, $stateParams) {
        // return PlaylistFactory.fetchAll();
        return PlaylistFactory.fetchById($stateParams.id);
      }
    }

  });
});
