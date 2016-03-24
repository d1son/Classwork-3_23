angular.module('RoutingApp').controller('LeastController', function($scope, $stateParams) {
  $scope.nameFromUrl = $stateParams.name;
});