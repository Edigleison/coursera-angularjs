(function () {
  angular.module('lunchApp', [])
  .controller('LunchCtrl', function($scope){
      $scope.countItems = function(){
        var count = $scope.items.split(",").length;
        if(count <= 3){
            $scope.message = "Menor igual a 3";
        }else{
            $scope.message = "Maior que 3";
        }

      };
  });
})();
