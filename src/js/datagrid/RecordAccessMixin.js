/*globals require,module */
/* jshint -W097, esnext: true */
'use strict';

var traverse = require('object-traverse');

var RecordAccessMixin = {

    getRecordData : function(index,config,ref) {
        var dataProvider =  this.state.dataProvider;
        var {formatter,renderer,path,id, editor} = config;
        var pathToUse = path || id; //we use path, if not id
        var cellRef = (function() {
          if ( ref ) {
              var element = ref.getDOMNode();
              return {
                  width : element.offsetWidth,
                  height : element.offsetHeight,
                  left : element.offsetLeft,
                  top : element.offsetTop
              };
          }
          return {};
        })();
    
        var record = dataProvider.recordAt(index);
        var traversedRecord = traverse(record);
        var value = null, formattedValue;
        if ( typeof traversedRecord.get(pathToUse) === 'function' ) {
            value = traversedRecord.exec(pathToUse);
        } else {
            value = traversedRecord.get(pathToUse);
        }

        if ( typeof formatter === 'function' ) {
            try {
                formattedValue = formatter(value,id,record);
            } catch ( e ) {
                return e;
            }
        } else {
            formattedValue = value;
        }

        return {
            cellRef : cellRef,
            value : value,
            record: record,
            index: index,
            formattedValue : formattedValue,
            formatter : formatter,
            renderer: renderer,
            id: id

        };
    }
};

module.exports = RecordAccessMixin;
