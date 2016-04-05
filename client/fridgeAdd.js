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
      'things that keep': 14,
      other: true
    };

    $scope.isCustom = function (category) {
      var result;
      category === 'other' ? result = true : result = false;
      return result;
    };

    $scope.addToFridge = function () {
      //add food to db
      var daysGood, dateExpire;
      //case for custom date
      if ($scope.addFood.category === 'other') {
        dateExpire = moment($scope.addFood.custom);
        daysGood = moment(dateExpire).subtract($scope.addFood.startDate).format('DDD');
      //case for default date
      } else {
        daysGood = $scope.expiry[$scope.addFood.category];
        dateExpire = moment($scope.addFood.startDate).add($scope.expiry[$scope.addFood.category], 'd');
      }
      var food = {
        foodName: $scope.addFood.name,
        // dateAdded: moment($scope.addFood.startDate).format("DD MM YY"), //not actually used for anything?
        daysGood: daysGood,
        dateExpire: dateExpire
      };
      foodFactory.add(food);
      //clear form fields
      $scope.addFood.name = '';
      $scope.addFood.category = '';
      $scope.addFood.startDate = '';
      //send success message
      //TODO:  make this less gross
      console.log(food);
      window.alert('Added ' + food.foodName + ' to your fridge!');
    };
  });


  /*
DATA FOR THE FOODS:
foodName:
dateAdded:
daysGood:
  */