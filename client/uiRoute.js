app.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/add");
  //
  // Now set up the states
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
    });
});