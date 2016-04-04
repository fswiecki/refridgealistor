angular.module('app.fridgeView', [])
  .controller('fridgeController', function ($scope, fridgeFactory) {
    $scope.remove = function () {
      console.log('get rid of this thing');
    };
  })
