var app = angular.module('sgt_app', []);
app.controller('studentController', function ($scope, $http, getHttp) {
    var self = this;
    self.student = {};
    self.student_array = [];
    self.get_student_data = function () {
        req = {
            url: 'http://s-apis.learningfuze.com/sgt/get',
            method: 'post',
            data: $.param({'api_key': 'lN3gVYfP6x'})
        };
        student_data = getHttp.get_student_data(req);
        student_data.then(function (serverdata) {
            self.student_array = serverdata.data;
            console.log('its working for get student', self.student_array);
        }, function () {
            console.error('its NOT WORKING')
        }).catch(function () {
            console.error('FAILURE')
        });
    };
});

app.factory('getHttp', function($http,$q){
    var defer = $q.defer();
    var service = {};

    service.get_student_data = function(req) {
        $http(req).then(function (response) {
            data = response.data;
            defer.resolve(data);
        }).catch(function(response){
            console.log('the request failed.')
        });
        return defer.promise;
    };
    return service;
});
app.config(function($httpProvider){
    $httpProvider.defaults.headers.post = {'Content-Type': 'application/x-www-form-urlencoded'};
});