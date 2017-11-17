//Funcion verificar el login 
var myApp = angular.module('myApp', []);
myApp.controller('GreetingController', ['$scope', '$http', '$window', function ($scope, $http, $window) {
    var url = 'http://localhost:8080/backendPpi/rest/usuario/login';
    
    $scope.login = function (username, password) {
        url = url + '?' + 'nomUsuario=' + username + '&password=' + password;
        $http.get(url
        ).then(function successCallback(response) {
            if(response.status == 200){
                var valorToken = "ABCDE12345678910";
                localStorage.setItem("token", valorToken);
                $window.location.href = 'file:///C:/Users/Usuario/Desktop/backend/admin.html';
            }else{
                var error = "Usuario o Contraseña incorrecto";
                $window.alert(error);
                $window.location.reload();
            }
        });
    }

}]);