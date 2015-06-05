/*globals require,module */
/* jshint -W097, esnext: true */
"use strict";

/**
 *
 */
module.exports = function pagerDataProvider(arrayDataProvider, rowsPerPage, currentState) {

    var currentPage = currentState ? currentState.currentPage : 0;

    return Object.defineProperties({

        recordAt: function recordAt(i) {
            return arrayDataProvider.recordAt[i];
        },

        nextPage: function nextPage() {
            if (this.hasNext()) {
                return pagerDataProvider(arrayDataProvider, rowsPerPage, {
                    currentPage: currentPage
                });
            } else {
                return null;
            }
        },

        /**
         * Map the rows available
         */
        map: function map(mapper) {}

    }, {
        length: {
            get: function () {
                return arrayDataProvider.length;
            },
            configurable: true,
            enumerable: true
        }
    });
};