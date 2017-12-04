(function () {
    var myApp = angular.module('myApp', []);
    myApp.controller("GreetingController", ['$scope', '$http', '$window', function ($scope, $http, $window) {
        var url = 'http://localhost:8080/backendPpi/rest/tdc';
        var urlPersona = 'http://localhost:8080/backendPpi/rest/persona';
        var urlFranquicia = 'http://localhost:8080/backendPpi/rest/persona';

        $http({
            method: "GET",
            url: urlPersona,
            url: urlFranquicia
        }).then(function (response) {
            $scope.persona = response.data;
            $scope.franquicia = response.data;
        }, function errorCallback(response) {
            var error = "Datos incorrectos";
            $window.alert(error);
        });

        $scope.registro = function (nombre = "", acronimo = "", tazaInteres = "", plazoMax = "", cupoMax = "", multa = "", nombreFranquicia = "",nombreFranquicia2 = "") {

            var card = new Object();
            var object = new Object();
            var object2 = new Object();
            var i = 0;
            debugger
            while(i < $scope.persona.length){
                if($scope.persona[i].nombre == nombreFranquicia){
                    object.idFranquicia = $scope.persona[i].idFranquicia;
                    object.nombre = $scope.persona[i].nombre;
                    object.acronimo = $scope.persona[i].acronimo;
                    object.rangoInicial = $scope.persona[i].rangoInicial;
                    object.rangoFinal = $scope.persona[i].rangoFinal;
                }
                i++;
            }
            while(i < $scope.franquicia.length){
                if($scope.franquicia[i].nombre == nombreFranquicia2){
                    object2.idFranquicia = $scope.franquicia[i].idFranquicia;
                    object2.nombre = $scope.franquicia[i].nombre;
                    object2.acronimo = $scope.franquicia[i].acronimo;
                    object2.rangoInicial = $scope.franquicia[i].rangoInicial;
                    object2.rangoFinal = $scope.franquicia[i].rangoFinal;
                }
                i++;
            }
            
            card.idTarjeta = "";
            card.nombreTarjeta = nombre;
            card.acronimo = acronimo;
            card.tasaInteres = tazaInteres;
            card.plazo = plazoMax;
            card.cupo = cupoMax;
            card.multa = multa;
            card.idFranquicia = {
                "idFranquicia": object.idFranquicia,
                "nombre": object.nombre,
                "acronimo": object.acronimo,
                "rangoInicial": object.rangoInicial,
                "rangoFinal": object.rangoFinal
            };
            var data = JSON.stringify(card);
            console.log(data);
            $http({
                method: "POST",
                url: url,
                headers: {
                    'Content-Type': "application/json"
                },
                data
            }).then(function (response) {
                var success = "Registrado con Exito";
                $window.alert(success);
                console.log(response.data);
            }, function errorCallback(response) {
                var error = "Datos incorrectos";
                $window.alert(error);
            });
        }
    }]);
}());