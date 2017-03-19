(function() {
    'use strict';

    function gtmService($timeout) {
        var gtm = this;

        gtm.push = function(event, data) {
            $setTimeout(function() {
                dataLayer.push({
                    'event': event,
                    'product': data
                });
            }, 100);
        };

        //gtm.push = push
    }
    angular.module(ngApp).service('gtmService', gtmService);
    gtmService.$inject = ['$timeout'];
})();
