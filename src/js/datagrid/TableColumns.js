

import React from 'react';
import assign from 'object-assign';
import {baseTableStyle,columnStyle,cellStyle} from './styles';
import stringUtil from '../forms/stringUtil';

export const ColGroup = (props) => {

    return <colgroup>
            {props.cols.map( (col,idx) => {
                const width = { };
                if ( col.width ) {
                    width.width = col.width;
                }
                return <col key={col.id +"-col-" + idx} style={width}></col>;
            })}
        </colgroup>;

};

ColGroup.propTypes =  {
    cols : React.PropTypes.array.isRequired
};


export const Thead = ( props ) => {
    const colStyle = assign({},columnStyle,cellStyle,{height: 25});
    return <thead>
        <tr>
        {props.cols.map( (col,idx) => {
            const title = col.title || stringUtil.createLabel   (col.id);
            return <th key={col.id +"-" + idx} style={colStyle}>{title}</th>;
        })}
        </tr>
    </thead>;
};

Thead.propTypes =  {
    cols : React.PropTypes.array.isRequired
};


const TableColumns = React.createClass({


    propTypes:  {
        cols : React.PropTypes.array
    },

    render() {

        return <div style={{position: 'absolute', zIndex: 111111, top: 0, left: 0, overflow: 'hidden'}}>
            <table style={baseTableStyle}>
                <ColGroup {...this.props}/>
                <Thead {...this.props} />
                <tbody></tbody>
            </table>
        </div>;
    }

});

export default TableColumns;
