angular.module('app.fridgeFactories', [])
  .factory('fridgeFactory', function () {
    var ff = {};

    return ff;
  })
  .factory('foodFactory', function () {
    var ff = {};

    //TODO: make this fridge a database
    var myFridge = [];

    ff.add = function (food) { 
      console.log('Adding ' + food.foodName + ' to the fridge!');
      myFridge.push(food);
    };

    return ff;
  });