angular.module('myApp')
    .config(function($stateProvider,$urlRouterProvider){
        $urlRouterProvider.otherwise('/delicacy')
        $stateProvider
            .state("/delicacy",{
                url:"/delicacy",
                templateUrl:"view/delicacy.html",
                controller:"delicacyCtrl"
            })
            .state('/screen',{
                url:'/screen',
                templateUrl:"view/screen.html"
            })
            .state('/distance',{
                url:'/distance',
                templateUrl:"view/distance.html"
            })


    })


