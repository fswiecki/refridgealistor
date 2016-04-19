angular.module('app.fridgeFactories', [])
  .factory('foodFactory', function () {
    var ff = {};

    //TODO: make this fridge a database
    // ff.myFridge = [];
    // with dummy data:
    ff.myFridge = [{foodName:"steak",daysGood:3,dateExpire:moment("2016-04-23T04:00:00.000Z")},
                   {foodName:"lettuce",daysGood:5,dateExpire:moment("2016-04-21T04:00:00.000Z")},
                   {foodName:"carrots",daysGood:12,dateExpire:moment("2016-04-25T04:00:00.000Z")},
                   {foodName:"apples",daysGood:10,dateExpire:moment("2016-04-28T04:00:00.000Z")},
                   {foodName:"milk",daysGood:6,dateExpire:moment("2016-04-22T04:00:00.000Z")},
                   {foodName:"broccoli",daysGood:5,dateExpire:moment("2016-04-18T04:00:00.000Z")}];

    ff.add = function (food) { 
      this.myFridge.push(food);
    };

    ff.remove = function(foodList) {
      for (food in foodList) {
        ff.myFridge.forEach(function (item, index) {
          if (item.foodName === food) {
            ff.myFridge.splice(index, 1);
            delete(foodList[food]);
          }
        });
      }
    };

    return ff;
  })
  .factory('userFactory', function ($http) {
    signup = function (user) {
      $http({
        method: 'POST',
        url: '/signup',
        data: JSON.stringify(user)
      });
    };

    signin = function (user) {
      $http({
        method: 'POST',
        url: '/login',
        data: JSON.stringify(user)
      });
    };

    return {
      signup: signup,
      signin: signin
    };
  });