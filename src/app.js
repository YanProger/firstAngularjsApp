angular.module('app', ['components'])
    .controller('emailsEditorController', function($scope) {
        $scope.emails = [
            'sidorov@gmail.com'
        ];
        $scope.addRandomEmail = function () {
            let datems = new Date().getTime() % 1000000;
            $scope.emails.push('example' + datems + (datems % 2 === 0 ?  '@ex.com' : ''));
        };
        $scope.getEmailCount = function () {
            alert(this.emails.length);
            return this.emails.length;
        };
    });
