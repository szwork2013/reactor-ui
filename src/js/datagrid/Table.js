

import React from 'react';
import assign from 'object-assign';

import {ColGroup,Thead} from './TableColumns';
import {baseTableStyle,cellStyle,baseCellStyle} from './styles';

export const Cell = (props) => {
    const {col,data} = props;
    const {id,path,formatter,renderer} = col;
    const val = data[id];
    return <div>{val}</div>;
};

export const Tbody = (props) => {
    const cellTdStyle = assign(cellStyle,baseCellStyle);

    return <tbody>
        {props.data.map( (data,idx) => {
            return <tr key={"data" + "-" + idx} >
                {props.cols.map( (col,idxc) => {
                    return <td key={col.id + "-" + idx +"-" + idxc} style={cellTdStyle}><Cell {...props} data={data} col={col} /></td>;
                })}
            </tr>;
        })}
    </tbody>;
};

Tbody.propTypes = {
    data : React.PropTypes.array.isRequired,
    cols : React.PropTypes.array.isRequired
};

const Table = React.createClass({


    propTypes:  {
        data : React.PropTypes.array.isRequired
    },

    render() {
        return <div style={{position: 'relative', zIndex: 10, height: 300, overflow: 'auto'}}>
            <table style={baseTableStyle}>
                <ColGroup {...this.props}/>
                <Thead {...this.props} />
                <Tbody {...this.props}/>
            </table>
        </div>;
    }


});


export default Table;
