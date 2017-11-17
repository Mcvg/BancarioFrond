(function () {
    var myApp = angular.module('myApp', []);
    myApp.controller("GreetingController", ['$scope', '$http', '$window', function ($scope, $http, $window) {
        var url = 'http://localhost:8080/backendPpi/rest/persona';

        $scope.registro = function (id = "", name = "", type = "", number = "", gender = "", telephone = "", email = "", address = "") {
            var user = new Object();
            user.idPersona = id;
            user.nroDocumento = number;
            user.nombre = name;
            user.telefono = telephone;
            user.direccion = address;
            user.email = email;
            user.idTipoDocument = {
                "idTipoDocumento": 1,
                "nombreDoc": type
            };
            user.idSexo = {
                "idSexo": 1,
                "nombreSexo": gender
            };
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
               // $window.location.reload();
            }, function errorCallback(response) {
                var error = "Datos incorrectos";
                $window.alert(error);
                $window.location.reload();
            });
        }
    }]);
}());