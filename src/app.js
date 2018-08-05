angular.module('app', ['components'])
    .controller('emailsEditorController', function() {
        this.emails = [
            'sidorov@gmail.com'
        ];
        this.addRandomEmail = function () {
            let datems = new Date().getTime() % 1000000;
            this.emails.push('example' + datems + (datems % 2 === 0 ?  '@ex.com' : ''));
        };
        this.getEmailCount = function () {
            alert(this.emails.length);
            return this.emails.length;
        };
    });
