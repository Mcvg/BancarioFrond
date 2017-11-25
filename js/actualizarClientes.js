//Funcion verificar el login 
var myApp = angular.module('myApp', []);
myApp.controller('GreetingController', ['$scope', '$http', '$window', function ($scope, $http, $window) {
    var url = 'http://localhost:8080/backendPpi/rest/persona/id?id';

    $scope.login = function (id) {
        url = url + '=' + id;

        $http.get(url).then(function successCallback(response) {
            if (response.status == 200) {
                method: 'GET',                
                url;
                $scope.posts = response.data;
            }
            else {
                var error = "Id No existe";
                $window.alert(error);
                $window.location.reload();
            }
        });
    }
}]);