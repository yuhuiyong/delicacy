/*function delicacyCtrl($scope,delicacy){

    delicacy.success(function (data) {
        $scope.data = data.activities;
        console.log(data)
    })
}

angular.module('myApp')
    .controller("delicacyCtrl",delicacyCtrl)*/

angular.module('myApp')
    .controller("delicacyCtrl",function($scope,$http){
        $http({method:"GET",url:"data/restaurants.json"}).success(function(data){
            $scope.info=data;
            console.log(data[0])
        })
        
        $scope.delicasy=function(){

        }
    })

/**
 * Created by samsung on 2017/2/17.
 */
