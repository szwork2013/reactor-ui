
import traverse from 'object-traverse';

const RecordAccessMixin = {

    //FIXME: we should break this up, we can't get refs all the time e.g. when we are on render
    getRecordData : function(index,config,ref) {
        var dataProvider =  this.state.dataProvider;
        var {setter,formatter,renderer,path,id} = config;

        var pathToUse = path || id; //we use path, if not id

        const cellRef = {};
        if ( ref ) {
            cellRef.width = ref.offsetWidth;
            cellRef.height = ref.offsetHeight;
            cellRef.left = ref.offsetLeft;
            cellRef.top = ref.offsetTop;
        }
        var record = dataProvider.recordAt(index);
        var traversedRecord = traverse(record);
        var value = null, formattedValue;

        if ( typeof traversedRecord.get(pathToUse) === 'function' ) {
            value = traversedRecord.exec(pathToUse);
        } else if ( typeof setter === 'function' ) {
            try {
                value = setter(record,id);
            } catch ( e ) {
                console.warn(e);
            }
        } else {
            value = traversedRecord.get(pathToUse);
        }

        if ( typeof formatter === 'function' ) {
            try {
                formattedValue = formatter(value,id,record);
            } catch ( e ) {
                console.warn(e);
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
            id: id,
            config: config

        };
    }
};

export default RecordAccessMixin;
