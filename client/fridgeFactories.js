angular.module('app.fridgeFactories', [])
  .factory('fridgeFactory', function () {
    var ff = {};

    return ff;
  })
  .factory('foodFactory', function () {
    var ff = {};

    //TODO: make this fridge a database
    // ff.myFridge = [];
    // with dummy data:
    ff.myFridge = [{foodName:"steak",daysGood:3,dateExpire:moment("2016-04-07T04:00:00.000Z")},
                   {foodName:"lettuce",daysGood:5,dateExpire:moment("2016-04-10T04:00:00.000Z")},
                   {foodName:"carrots",daysGood:12,dateExpire:moment("2016-04-17T04:00:00.000Z")},
                   {foodName:"apples",daysGood:4,dateExpire:moment("2016-04-09T04:00:00.000Z")},
                   {foodName:"milk",daysGood:6,dateExpire:moment("2016-04-10T04:00:00.000Z")}];

    ff.add = function (food) { 
      this.myFridge.push(food);
    };

    ff.remove = function(foodList) {
      //TODO: this needs to happen with a database
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
      console.log('sign in!');
    };

    return {
      signup: signup,
      signin: signin
    };
  });