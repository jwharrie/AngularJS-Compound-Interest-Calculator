app.controller("calcCtrl", function($scope) {
    $scope.initAmt = 0;
    $scope.apr = 0;
    $scope.months = 0;
    $scope.contri = 0;

    $scope.calcSavings = function() {
        let newAmtx100 = $scope.initAmt * 100;
        let contrix100 = $scope.contri * 100;
        let rate = 1 + ($scope.apr / 1200);
        for (let i = 0; i < $scope.months; i++) {
            newAmtx100 *= rate;
            newAmtx100 += contrix100;
        }
        return newAmtx100 / 100;
    };
});