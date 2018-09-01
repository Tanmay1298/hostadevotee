angular.module('searchService', []).service('searchService', ['$http', function($http, $scope) {

    console.log("service invoked");
    var vm = this;


    vm.getAllUser = function(city) {
        //  console.log(id);
        console.log("service call" + city);
        return $http.get('/api/user/' + city).then(function(data) {
            console.log(data);
            return data;
        });
    }

}]);