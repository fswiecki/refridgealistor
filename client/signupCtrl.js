angular.module('app.signUp', [])
  .controller('signupController', function ($scope, userFactory) {
    $scope.user = {};
    $scope.makeUser = function() {
      var userObj = {
        username: $scope.user.username,
        password: $scope.user.password
      };
      userFactory.signup(userObj);
    };
  });