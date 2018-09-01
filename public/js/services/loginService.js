angular.module('loginService', []).service('loginService', ['$http', function($http, $scope,$location ) {
    

    var vm=this
    vm.getAllUser = function(data) {
        //  console.log(id);
        return $http.post('/api/login', data).then(function(data) {
           // return data;

           console.log(data);
           return data;
        });
    }

}]);