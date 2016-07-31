(function () {
    'use strict';

    angular
        .module('app')
        .controller('LeftNavigation', LeftNavigation);

    LeftNavigation.$inject = ['$state'];

    /* @ngInject */
    function LeftNavigation($state) {
        var vm = this;
        vm.title = 'LeftNavigation';
        vm.routename = 'hello';

        activate();

        ////////////////

        function activate() {
            // Controller initialization goes here
        }
    }

})();

