angular.module('app.fridgeView', [])
  .controller('fridgeController', function ($scope, foodFactory, fridgeFactory) {
    $scope.fridgeContents = [];
    $scope.fillFridge = function () {
      console.log('Filling your fridge...');
      var fridgeData = foodFactory.myFridge;
      fridgeData.forEach(function (food) {
        var foodView = {};
        var now = new Date();
        foodView.name = food.foodName;
        foodView.daysOld = now - food.dateAdded;
        foodView.daysLeft = food.daysGood - foodView.daysOld; 
        console.log(foodView);
        $scope.fridgeContents.push(foodView);
      });
    };
    $scope.remove = function () {
      console.log('get rid of this thing');
    };
  });
