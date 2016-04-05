angular.module('app.logIn', [])
  .controller('loginController', function ($scope, userFactory) {
    $scope.user = {};
    $scope.signIn = function() {
      var userObj = {
        username: $scope.user.username,
        password: $scope.user.password
      };
      userFactory.signin(userObj);
    };
  });