app.config(function($stateProvider, $urlRouterProvider) {
  // For any unmatched url, redirect add page
  $urlRouterProvider.otherwise("/add");
  
  $stateProvider
    .state('add', {
      url: "/add",
      templateUrl: "partials/add.html",
      controller: 'foodController'
    })
    .state('view', {
      url: "/view",
      templateUrl: "partials/view.html",
      controller: 'fridgeController'
    })
    .state('login', {
      url: "/login",
      templateUrl: "partials/login.html",
      controller: 'loginController'
    })
    .state('signup', {
      url: "/signup",
      templateUrl: "partials/signup.html",
      controller: 'signupController'
    });
});