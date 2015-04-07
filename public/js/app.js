var app = angular.module('app', ['ngMaterial']);

app.controller('MainController', ['$scope', '$http', function($scope, $http){
	$http.get('http://localhost:3000/api/books').
			success(function(data){
				$scope.authors = data.authors;
				$scope.books = data.books;
			}).error(function(error){
				console.log(error);
	});

}]);