var app = angular.module('app', ['ngMaterial', 'ngRoute']);

app.config(['$routeProvider', function($routeProvider){
	$routeProvider
		.when('/new', {
			templateUrl: 'views/new.html',
			controller: 'NewController'
		})
		.otherwise({
			templateUrl: 'views/home.html',
			controller: 'MainController',
			controllerAs: 'main'
		})
}]);

app.controller('MainController', ['$scope', '$http', function($scope, $http){
	$http.get('http://localhost:3000/api/books').
			success(function(data){
				$scope.authors = data.authors;
				$scope.books = data.books;
				$scope.data = data;
			}).error(function(error){
				console.log(error);
	});

}]);

app.controller('NewController', ['$scope','$http', function($scope, $http){
	$scope.book = {
		isbn: '',
		title: '',
		author: '',
		genre: '',
		img: 'img/book2.jpg',
		year: 0
	}

	$scope.create = function(){
		$http.post('http://localhost:3000/api/books', $scope.book).
				success(function(data){
					$scope.book = {
						isbn: '',
						title: '',
						author: '',
						genre: '',
						img: 'img/book2.jpg',
						year: 0
					}
				}).error(function(error){
					console.log(error);
		});		
	}
}]);