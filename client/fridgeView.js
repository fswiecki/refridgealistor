angular.module('app.fridgeView', [])
  .controller('fridgeController', function ($scope, foodFactory) {
    $scope.myFridge = [];

    $scope.picked = {};

    $scope.fillFridge = function () {
      $scope.myFridge = [];
      var fridgeData = foodFactory.myFridge;
      fridgeData.forEach(function (food) {
        var foodView = {};
        var now = moment();
        foodView.picked = false;
        foodView.name = food.foodName;
        foodView.expiry = food.dateExpire;
        foodView.daysLeft = foodView.expiry.diff(now, 'days');
        //color coding classes//
        if (foodView.daysLeft < 0) { 
          foodView.code = 'primary';
        } else if (foodView.daysLeft < 2) {
          foodView.code = 'danger';
        } else if (foodView.daysLeft < 4) { 
          foodView.code = 'warning';
        } else if (foodView.daysLeft < 6) {
          foodView.code = 'success';
        } else {
          foodView.code = 'info';
        }
        $scope.myFridge.push(foodView);
      });
    };

    $scope.select = function (item, picked, name) {
      if (!item.picked) {
        $scope.picked[name] = true;
      } else {
        delete $scope.picked[name];
      }
      item.picked = !picked;
    };

    $scope.remove = function () {
      foodFactory.remove($scope.picked);
      $scope.fillFridge();
    };

    //fill 'er up
    $scope.fillFridge();
  });