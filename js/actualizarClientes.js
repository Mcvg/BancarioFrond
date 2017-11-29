//Funcion verificar el consultar 
var myApp = angular.module('myApp', []);
myApp.controller('GreetingController', ['$scope', '$http', '$window', function ($scope, $http, $window) {
    var url = 'http://localhost:8080/backendPpi/rest/persona/id?id';
    var url2 = 'http://localhost:8080/backendPpi/rest/persona/?idPersona';

    $scope.consultar = function (id) {
        url = url + '=' + id;

        $http.get(url).then(function successCallback(response) {
            $scope.posts = response.data;
        });
    }

    $scope.actualizar = function (idPersona = $scope.posts.idPersona, nroDocumento = $scope.posts.nroDocumento, nombre = $scope.posts.nombre, telefono = $scope.posts.telefono, direccion = $scope.posts.direccion, email = $scope.posts.email , idTipoDocumento = $scope.posts.idTipoDocument.idTipoDocumento , nombreDoc = $scope.posts.idTipoDocument.nombreDoc , idSexo = $scope.posts.idSexo.idSexo, nombreSexo = $scope.posts.idSexo.nombreSexo) {

        var user = new Object();
        console.log(idTipoDocumento);
        user.idPersona = idPersona;
        user.nroDocumento = nroDocumento;
        user.nombre = nombre;
        user.telefono = telefono;
        user.direccion = direccion;
        user.email = email;
        user.idTipoDocument = {
            "idTipoDocumento": idTipoDocumento,
            "nombreDoc": nombreDoc
        };
        user.idSexo = {
            "idSexo": idSexo,
            "nombreSexo": nombreSexo
        };
        var data = JSON.stringify(user);
        console.log(data);
        $http({
            method: 'PUT',
            url: url2,
            headers: {
                'Content-Type': "application/json"
            },
            data
        }).then(function successCallback(response) {
            $scope.user = response.data;
            console.log(response.data);
            //console.log("Datos actualizados con exito");
            $window.location.reload();
        }, function errorCallback(response) {
    
        });
    }

    //aqui 
}]);