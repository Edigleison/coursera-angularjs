(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', ['$scope', function($scope){
      $scope.countItems = function(){
        var count = 0;
        if($scope.items != undefined){

          var list = $scope.items.split(",");
          var i;
          for(i in list){
            if(list[i].trim().length > 0){
              count++;
            }
          }
        }

        if(count == 0){
          $scope.message = "Please enter data first";
        }else if(count <= 3){
            $scope.message = "Enjoy!";
        }else{
            $scope.message = "Too much!";
        }

      };

      $scope.isValid = function(){
        return $scope.message === "Enjoy!" || $scope.message === "Too much!";
      }
  }]);
})();
