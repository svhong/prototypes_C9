var app = angular.module('musicApp',[]);
app.factory('getMusic', function($http,$q,$log){
var service = {};
var baseUrl = "https://itunes.apple.com/search?term=";
var url = '';
var searchTerm = '';
var the_music = [];
    service.createUrl = function(){
        url = baseUrl + searchTerm + "&callback=JSON_CALLBACK";
        $log.info('this is the url', url)
    };

    service.setSearch = function(search){
        searchTerm = search;
    };

    service.get_music = function(){
        var defer = $q.defer();
        var service = {};
        this.createUrl();
        $log.info('this is the get music function being called', url);
        $http({
            url: url,
            method: 'jsonp'
        }).then(function(response){
            data = response.data.results;
            defer.resolve(data);
            $log.info('the http call was a success!', response.data.results);
            // the_music = data;
            // $log.info('Array with music', the_music);

        }).catch(function(response){
            $log.error('the server ran into some issues',response);
        });
        return defer.promise;
    };
return service;
});
    app.controller('musicController',function(getMusic,$log){
        var self = this;
        self.music = {};
    self.getMusic = function(){
        getMusic.setSearch(this.searchTerm);
        $log.error("Getmovies function is working");
        var ituneCall = getMusic.get_music();
        ituneCall.then(function(data){
            $log.info('then has been called with data : ', data);
            self.music = data;
            $log.info('this is the music object : ', self.music);
        })
    };
});