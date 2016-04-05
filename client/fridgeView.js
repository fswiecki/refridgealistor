angular.module('app.fridgeView', [])
  .controller('fridgeController', function ($scope, foodFactory, fridgeFactory) {
    $scope.myFridge = [];

    $scope.fillFridge = function () {
      console.log('Filling your fridge...');
      var fridgeData = foodFactory.myFridge;
      fridgeData.forEach(function (food) {
        var foodView = {};
        var now = moment();
        foodView.name = food.foodName;
        foodView.expiry = food.dateExpire;
        foodView.daysLeft = foodView.expiry.diff(now, 'days');
        $scope.myFridge.push(foodView);
      });
    };

    $scope.remove = function () {
      console.log('get rid of this thing');
    };

    //fill 'er up
    $scope.fillFridge();
  });
