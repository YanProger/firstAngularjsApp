angular.module('components', [])
    .directive('emailsEditor', function() {
        return {
            scope: {
                emails: "="
            },
            controller : function ($scope) {
                $scope.addEmail = function (email) {
                    if (email !== '' && this.emails.indexOf(email) === -1){
                        $scope.emails.push(email);
                    }
                };
                $scope.removeEmail = function (e) {
                    $scope.emails.splice(parseInt(e.target.id),1);
                };

                $scope.handleBlur = function (e) {
                    $scope.addEmail(e.target.value);
                    e.target.value = '';

                };
                $scope.handleKeypress = function (e) {
                    if (e.target.value !== '' && (e.keyCode === 13 || e.keyCode === 44)){
                        e.target.blur();
                    }
                };
                $scope.handlePaste = function (e) {
                    e.target.value = e.clipboardData.getData('text');
                    e.target.blur(e);
                };


                //заимствованный код: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
                $scope.validateEmail = function (email) {
                    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    return re.test(String(email).toLowerCase());
                };
            },
            restrict: 'E',
            templateUrl: 'emails-editor.html',
            link: function ($scope, element, attrs) {
                console.log('testDirective');
            }
        };
    });
