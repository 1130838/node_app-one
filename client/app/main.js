var shoppingApp = angular.module('shoppingApp', ['ngRoute','ui.router']);

shoppingApp.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
        .state('main', {
            url: '/',
            templateUrl: 'partial_views/product-list.html',
            controller: 'ProductListCtrl'
        })
        .state('detail', {
            url: '/:productName',
            templateUrl: 'partial_views/product-detail.html',
            controller: 'ProductDetailCtrl'
            // countryName : $routeParams.countryName
        });
    $urlRouterProvider
        .otherwise('/');
    $locationProvider.html5Mode(true)

});

//Defining a Factory Service with cashed Data 
//Fetch server just once - results will be saved in cacheData 
shoppingApp.factory('products_service', function ($http) {
    var cachedData;

    function getData(callback) {
        if (cachedData) {
            callback(cachedData);
        } else {
            $http.get('api/products').success(function (data) {
                cachedData = data;
                callback(data);
            });
        }
    }

    return {
        list: getData,
        find: function (name, callback) {
            console.log('name = ' + name);
            getData(function (data) {

                var product = data.filter(function (entry) {
                    return (entry.name).trim() === name.trim(); // trim() to remove spaces
                })[0];

                callback(product);
            });
        }
    };
});