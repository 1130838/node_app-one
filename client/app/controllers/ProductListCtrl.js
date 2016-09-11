angular.module('shoppingApp')
    .controller('ProductListCtrl', function ($scope, products_service) {

        products_service.list(function (products) {
            var totalNumberProducts = products.length;
            console.log('products.length = ' + totalNumberProducts);
            $scope.totalNumberProducts = totalNumberProducts;
           
            $scope.products = products;
        });
    });