'use strict';

juke.factory('PlaylistFactory', function ($http, $q, SongFactory) {

	var cachedPlaylists = [];

  var PlaylistFactory = {};

  PlaylistFactory.fetchById = function (id) {
    var url = '/api/playlists/' + id;
    return $q.all([$http.get(url), $http.get(url + '/songs')])
    .then( responses => responses.map(res => res.data) )
    .then( results => {
    	console.log("REZULTZ ",results);
      var playlist = results[0];
      var songs = results[1].map(SongFactory.convert);
      playlist.songs = songs;
      return playlist;
    });
  };

   PlaylistFactory.fetchAll = function () {
        return $http.get('/api/playlists')
        .then(function (response) {
            angular.copy(response.data, cachedPlaylists);
            return cachedPlaylists;
        });
    };

    PlaylistFactory.create = function (data) {
        return $http.post('/api/playlists', data)
        .then(function (response) {
            var playlist = response.data
            cachedPlaylists.push(playlist);
            return playlist;
        });
    };

  return PlaylistFactory;

});
