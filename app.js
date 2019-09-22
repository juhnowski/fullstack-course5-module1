(function () {
'use strict';

angular.module('DishesCalculator', [])

.controller('DishesCalculatorController', function ($scope) {
  $scope.dishes = "";
  $scope.message = "Please enter data first";
  $scope.color = "red";

  $scope.calculateDishes = function () {
    $scope.message = calculate($scope.dishes);
    console.log($scope.message);
  };


  function calculate(string) {
    if (string.length===0){
      $scope.color = "red";
      return "Please enter data first";
    }
    var totalStringValue = 0;
    var list = string.split(',');
    for (var i = 0; i < list.length; i++) {
      if (list[i].trim()>0){
        totalStringValue += 1;
      }
    }

    $scope.color = "green";

    if (totalStringValue==0){
      $scope.color = "red";
      return "Please enter data first";
    }

    if (totalStringValue <= 3){
      return "Enjoy!";
    } else {
      return "Too much!"
    }

  }

});


})();
