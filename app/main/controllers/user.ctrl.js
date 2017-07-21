(function() {
    var app = angular.module("user", []);
    app.controller('userCtrl', ['$scope', 'userService', '$location', '$rootScope', '$window', 'md5',
        function($scope, userService, $location, $rootScope, $window, md5) {
            $scope.login = function() {
            	$scope.request = {
            		userName : $scope.input.username,
            		password : md5.createHash($scope.input.password || '')
            	}
            	userService.login($scope.request)
            		.then(function (response){
            			sessionStorage.setItem("User-Data", response.data.token);
                        sessionStorage.setItem("role", response.data.role);
                        sessionStorage.setItem("id", response.data.id);
            			$window.location.href = $rootScope.clientAdd;
            		}, function (error){
            			console.log(error);
            		})
                // sessionStorage.setItem("User-Data", "hoangkhanh");
                // $window.location.href = $rootScope.clientAdd;
            }
        }
    ])
}());
