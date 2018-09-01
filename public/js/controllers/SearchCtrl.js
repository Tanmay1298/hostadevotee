angular.module('searchController', [])
    .controller('searchCtrl', function($scope, signUpService, searchService, $location) {

        var vm = this;
        vm.formData1 = {
            allCountries: [],
            allStates: [],
            allUser: []
        };

        vm.uiConfig = {
            userData: []

        };

        vm.uiConfig.userData = JSON.parse(localStorage.getItem('dataUser'));
        //console.log(vm.uiConfig.userData.isAuth)

        if (vm.uiConfig.userData == null || vm.uiConfig.userData.isAuth != "true")

        {

            $location.url("/");
        }

        vm.getStateById = getStateById;
        vm.getCityById = getCityById;
        vm.getUser = getUser;
        signUpService.get().then(function(data) {

            vm.formData1.allCountries = data.data;
            console.log(vm.formData1.allCountries)
        });

        $scope.editProfile = function() {


            $location.url("/edit");

        }

        $scope.signup = function(data) {
            console.log("hua", data);

            signUpService.create(data).then(function(req, data) {

                 $location.url("/");
            });

        }

        $scope.logOut = function() {

            localStorage.clear();
            $location.url("/");
        }

        function getStateById(id) {
            console.log(id);
            signUpService.getAllState(id).then(function(data) {
                vm.formData1.allStates = data.data;
                console.log(vm.formData1.allStates)
            }).catch(function(err) {
                console.log(err)
            });
        }

        function getCityById(id) {
            signUpService.getAllCity(id).then(function(data) {
                vm.formData1.allCities = data.data;
            }).catch(function(err) {
                console.log(err)
            });
        }

        function getUser(city) {
            console.log(city.cityName);
            searchService.getAllUser(city.cityName).then(function(data) {
                vm.formData1.allUser = data.data;
                console.log(vm.formData1.allUser[0].username)
            }).catch(function(err) {
                console.log(err)
            });
        }



    });

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}