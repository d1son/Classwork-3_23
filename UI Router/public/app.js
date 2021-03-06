angular.module('RoutingApp', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'partial-home.html'
      })

      .state('home.list', {
        url: '/list',
        templateUrl: 'partial-home-list.html',
        controller: function($scope) {
          $scope.dogs = ['Lassie', 'Cujo', 'Dog']
        }
      })

      .state('home.paragraph', {
        url: '/paragraph',
        template: 'This is a paragraph'
      })

      .state('about', {
        url: '/about',
        views: {
          '': {
            templateUrl: 'partial-about.html'
          },
          'columnOne@about': {
            template: 'I am a column'
          },
          'columnTwo@about': {
            templateUrl: 'table-data.html',
            controller: 'FunnyNameController'
          }
        }
      })

      .state('paul', {
        url: '/paul/:name',
        templateUrl: 'partial-paul.html',
        controller: 'PaulTroller'
      })

      .state('least', {
        url: '/least',
        templateUrl: 'partial-least.html'
      })

      .state('least.angular', {
        url: '/angular',
        templateUrl: 'partial-least-angular.html'
      })

      .state('least.javascript', {
        url: '/javascript',
        templateUrl: 'partial-least-javascript.html'
      })

      .state('least.css', {
        url: '/css',
        templateUrl: 'partial-least-css.html'
      })

      // .when('/javascript', {
      //   templateUrl: 'javascript.html'
      // })
      // .when('/jquery', {
      //   templateUrl: 'jquery.html'
      // })
      // .when('/angular', {
      //   templateUrl: 'angular.html'
      // })
      // .otherwise({
      //   redirectTo: '/'
      // });

    $locationProvider.html5Mode(true);
  }]);