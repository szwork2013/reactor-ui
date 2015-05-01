/*globals require,module */
/* jshint -W097, esnext: true */
"use strict";

/**
 * A RecordProvider backed by a static array
 *
 */

module.exports = function (array) {
    if (!Array.isArray(array)) {
        throw new Error("argument must be an array");
    }
    return {
        count: function count() {
            return array.length;
        },

        recordAt: function recordAt(i) {
            return array[i];
        }
    };
};