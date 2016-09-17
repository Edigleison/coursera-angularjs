(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', ctrl);
	ctrl.$inject = ['$scope'];
	function ctrl ($scope){
    $scope.checkLunch = function(){
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
        $scope.messageClass = "alert-danger";
        $scope.message = "Please enter data first";
      }else if(count <= 3){
          $scope.messageClass = "alert-success";
          $scope.message = "Enjoy!";
      }else{
          $scope.messageClass = "alert-success";
          $scope.message = "Too much!";
      }

    };
  };
})();
