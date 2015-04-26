/*globals require,module */
/* jshint -W097, esnext: true */
'use strict';

/**
 * A RecordProvider backed by a static array
 *
 */
export default function(array) {
    if ( !Array.isArray(array) ) {
        throw new Error("argument must be an array");
    }
    return {
        count : function() {
            return array.length;
        },

        recordAt: function(i) {
            return array[i];
        }
    }
};