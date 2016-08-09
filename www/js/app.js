// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var app = angular.module('magic8ball', ['ionic']);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
});

app.controller('PredictionController', function ($scope, $timeout) {
  var predictionList = [
    "Omelette",
    "Gourd Soup",
    "Fried Fish",
    "Fried Water Morning Glory",
    "Instant Noodle"
  ];

  $scope.prediction = "Tap For Dish";
  $scope.showed = true;
  $scope.img_showed = false;

  $scope.ask = function(){
    $scope.prediction = "Checking...";
    $scope.showed = false;
    $scope.img_showed = false;
    $timeout(function(){
      $scope.prediction = predictionList[Math.floor(Math.random() * predictionList.length)];
      $scope.showed = true;
      $scope.img_showed = true;
    }, 2000);
  }

});
