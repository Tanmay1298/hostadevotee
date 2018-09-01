angular.module('signUpService', []).service('signUpService', ['$http', function($http, $scope) {



    console.log("signUpService involve");
    var vm = this;

    /*return {*/
    // call to get all nerds
    vm.get = function() {
            console.log("function called");

            return $http.get('/api/country').then(function(data) {
                console.log(data);
                return data;
            });
        },

        vm.getAllState = function(id) {
            console.log(id);

            return $http.get('/api/state/' + id).then(function(data) {
                console.log(data);
                return data;
            });
        },

        vm.getAllCity = function(id) {
            console.log(id);

            return $http.get('/api/city/' + id).then(function(data) {
                console.log(data);
                return data;
            });
        },

        vm.sum = function() {

            console.log("hey bro")
        },

        // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new nerd
        vm.create = function(nerdData) {
            console.log(nerdData);
            return $http.post('/api/signup', nerdData).then(function(data) {

                console.log("hello");
                console.log(data.data);
                if (data.data == 309) {
                    return alert("Sorry Try Again");
                } else {

                    return alert("Welcome");

                }

            });

            //alert("Sorry Plz try Again");
        },

        vm.update = function(data) {
            console.log("update service called");
            console.log(data);
            return $http.put('/api/update', data).then(function(data) {

                console.log("hello");
                console.log(data.data);
                if (data.data == 200) {
                    return alert("Update Sucessfully");
                } else {

                    return alert("Update");

                }

            });

            //alert("Sorry Plz try Again");
        },

        // call to DELETE a nerd
        vm.delete = function(id) {
            return $http.delete('/api/nerds/' + id);
        }
    /* }  */

}]);