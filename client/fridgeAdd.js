angular.module('app.fridgeAdd', [])
  .controller('foodController', function ($scope, foodFactory) {
    // $scope.food.startDate = new Date();
    $scope.expiry = {
      'raw meat': 3,
      'deli meat': 7,
      eggs: 7,
      'leafy greens': 5,
      'root veggies': 12,
      milk: 6,
      fruit: 4,
      leftovers: 5,
      'things that keep': 14
    };
    $scope.addToFridge = function () {
      //add food to db
      var food = {
        foodName: $scope.addFood.name,
        daysGood: $scope.expiry[$scope.addFood.category],
        dateAdded: $scope.addFood.startDate
      };
      foodFactory.add(food);
      //clear form fields
      $scope.addFood.name = '';
      $scope.addFood.category = '';
      $scope.addFood.startDate = '';
      //send success message
      //TODO:  make this less gross
      window.alert('Added ' + food.foodName + ' to your fridge!');
    };
  });


  /*
DATA FOR THE FOODS:
foodName:
dateAdded:
daysGood:
  */