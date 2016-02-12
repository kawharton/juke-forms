'use strict';

juke.controller('SidebarCtrl', function($scope, PlaylistFactory) {

    PlaylistFactory.fetchAll().then(function(playlists) {
        $scope.playlists = playlists;
    	
    });

    // $scope.viewAlbums = function() {
    //     $rootScope.$broadcast('viewSwap', {
    //         name: 'allAlbums'
    //     });
    // };

    // $scope.viewAllArtists = function() {
    //     $rootScope.$broadcast('viewSwap', {
    //         name: 'allArtists'
    //     });
    // };

});
