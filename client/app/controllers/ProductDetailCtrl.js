angular.module('shoppingApp')
    .controller('ProductDetailCtrl', function ($scope, $stateParams, products_service) {

        console.log('$stateParams = ' + $stateParams);
        console.log('$stateParams.countryName = ' + $stateParams.productName);

        products_service.find($stateParams.productName, function (product) {

            console.log($stateParams);
            console.log('product : ' + product);
            $scope.product = product;
        });

    });
    