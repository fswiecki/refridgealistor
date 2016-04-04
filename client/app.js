angular.module('app', [])
  .controller('foodController', function($scope, foodFactory){
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
      foodFactory.add();
    };
  })
  .factory('foodFactory', function(){
    var ff = {};

    ff.add = function () { 
      console.log('Add the thing to the fridge!')
    };

    return ff;
  });


  /*
DATA FOR THE FOODS:
foodName:
dateAdded:
daysGood:
  */