

module.exports = function(array) {

    if ( !Array.isArray(array) ) {
        throw new Error("argument must be an array");
    }

    return {
        get length() {
            return array.length;
        },

        recordAt(i) {
            return array[i];
        },

        /**
         * Iterate on the records starting with startIdx or 0 (default)
         * and endIdx or length -1;
         *
         * mapper is passed the following parameters
         *
         * record, index, endIdx, dataProvider
         *
         *
         * @param mapper
         * @param start
         * @param end
         */
        map(mapper,startIdx,endIdx) {
            var start = startIdx || 0;
            var end = endIdx || this.length;
            var result = [];

            for ( var i=start; i < end; i++ ) {
                result.push(mapper.apply(mapper,[this.recordAt(i),i,end,this]));
            }
            return result;

        }

    };
};
