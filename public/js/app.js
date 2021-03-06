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
	$scope.authors = [];
	$scope.books = [];
	$scope.getData = function(){
		$http.get('http://localhost:3000/api/books').
				success(function(data){
					$scope.authors = data.authors;
					$scope.books = data.books;
					$scope.data = data;
				}).error(function(error){
					console.log(error);
		});		
	}


	$scope.delete = function(id, $index){
		$http.delete('http://localhost:3000/api/books/'+id);
		$scope.books.splice($index, 1);
	}

	$scope.getData();

}]);

app.controller('NewController', ['$scope','$http', '$location', function($scope, $http, $location){
	$scope.book = {
		isbn: '',
		title: '',
		author: '',
		genre: '',
		img: 'img/washedout.png',
		year: 2015
	}

	$scope.create = function(){
		$http.post('http://localhost:3000/api/books', $scope.book).
				success(function(data){
					$scope.book = {
						isbn: '',
						title: '',
						author: '',
						genre: '',
						img: 'img/washedout.png',
						year: 0
					}

					$location.path('/');
				}).error(function(error){
					console.log(error);
		});		
	}
}]);