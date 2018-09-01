angular.module('MainCtrl', []).controller('MainController', function($scope, loginService, $location, $uibModal) {

    var vm = this;
    vm.formData = {};
    $scope.getUser = function(data) {

        console.log(data);

        loginService.getAllUser(data).then(function(res) {
            console.log(res.data);

            if (res.data == "309") {

                console.log("ha bhai")

                /*res.data[0].isAuth="true"

                localStorage.clear();
                localStorage.setItem('dataUser', JSON.stringify(res.data[0]));
                localStorage.setItem('payload', JSON.stringify(res.data[0].token));

                $location.url('/search');*/
                alert("try again");
            } else {

                res.data[0].isAuth="true"

                localStorage.clear();
                localStorage.setItem('dataUser', JSON.stringify(res.data[0]));
                localStorage.setItem('payload', JSON.stringify(res.data[0].token));

                /* var modalInstance = $uibModal.open({
                     animation: true,
                     templateUrl: "views/alert.html",
                     backdrop: "static",
                     size: "sm",
                     scope: $scope
                 });*/
                 $location.url('/search');
                
            }

        }).catch(function(err) {
            console.log(err)
        });
    }
});