angular.module('app.fridgeFactories', [])
  .factory('fridgeFactory', function () {
    var ff = {};

    return ff;
  })
  .factory('foodFactory', function () {
    var ff = {};

    //TODO: make this fridge a database
    ff.myFridge = [];

    ff.add = function (food) { 
      console.log('Adding ' + food.foodName + ' to the fridge!');
      this.myFridge.push(food);
    };

    return ff;
  });