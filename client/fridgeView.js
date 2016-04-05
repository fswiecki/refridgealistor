angular.module('app.fridgeView', [])
  .controller('fridgeController', function ($scope, foodFactory, fridgeFactory) {
    $scope.myFridge = [];

    $scope.picked = {};

    $scope.fillFridge = function () {
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
          foodView.code = 'never';
        } else if (foodView.daysLeft < 2) {
          foodView.code = 'immediately';
        } else if (foodView.daysLeft < 4) { 
          foodView.code = 'soon';
        } else if (foodView.daysLeft < 6) {
          foodView.code = 'later';
        } else {
          foodView.code = 'eventually';
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
      console.log('get rid of this thing');
    };

    //fill 'er up
    $scope.fillFridge();
  });