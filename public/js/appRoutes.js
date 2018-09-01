angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController',
            controllerAs: 'vm'
        })       
        .when('/login', {
            templateUrl: 'views/login.htm',
            controller: 'MainCtrl',
            controllerAs: 'vm'
        })
        .when('/signup', {
            templateUrl: 'views/signup.html',
            controller: 'signCtrl',
            controllerAs: 'vm',
            resolve: {
                editMode: function() {
                    return false;
                }
            },

        })
        .when('/edit', {
            templateUrl: 'views/signup.html',
            controller: 'signCtrl',
            controllerAs: 'vm',
            resolve: {
                editMode: function() {
                    return true;
                }
            },
        })
        .when('/search', {
            templateUrl: 'views/search.html',
            controller: 'searchCtrl',
            controllerAs: 'vm'
        });

    $locationProvider.html5Mode(true);

}]);