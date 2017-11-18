(function () {
    var myApp = angular.module('myApp', []);
    myApp.controller("GreetingController", ['$scope', '$http', '$window', function ($scope, $http, $window) {
        var url = 'http://localhost:8080/backendPpi/rest/franquicia';

        $scope.registro = function (idFranquicia = "", nombre = "", acronimo = "", rangoInicial = "", rangoFinal = "") {
            var user = new Object();
            user.idFranquicia = idFranquicia;
            user.nombre = nombre;
            user.acronimo = acronimo;
            user.rangoInicial = rangoInicial;
            user.rangoFinal = rangoFinal;       

            var data = JSON.stringify(user);
            $http({
                method: "POST",
                url: url,
                headers: {
                    'Content-Type': "application/json"
                },
                data
            }).then(function (response) {
                var success = "Exito";
                $window.alert(success);
                console.log(response.data);
            }, function errorCallback(response) {
                var error = "Datos incorrectos";
                $window.alert(error);
                $window.location.reload();
            });
        }
    }]);
}());