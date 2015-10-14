

/**
 *
 */
module.exports = function pagerDataProvider(arrayDataProvider,rowsPerPage,currentState) {

    var currentPage = currentState ? currentState.currentPage : 0;

    return {

        get length() {
            return arrayDataProvider.length;
        },

        recordAt(i) {
            return arrayDataProvider.recordAt[i];
        },

        nextPage() {
            if ( this.hasNext() ) {
                return pagerDataProvider(arrayDataProvider,rowsPerPage,{
                    currentPage : currentPage
                });
            } else {
                return null;
            }
        },

        /**
         * Map the rows available
         */
        map(mapper) {



        }

    };
};
