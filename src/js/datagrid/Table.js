

import React from 'react';
import assign from 'object-assign';

import {ColGroup,Thead} from './TableColumns';
import {baseTableStyle,cellStyle,baseCellStyle} from './styles';

export const Tbody = (props) => {
    const cellTdStyle = assign(cellStyle,baseCellStyle);
    return <tbody>
        {props.data.map( (data,idx) => {
            return <tr key={"data" + "-" + idx} >
                {props.cols.map( (col,idxc) => {
                    return <td key={col.id + "-" + idx +"-" + idxc} style={cellTdStyle}>{"A"}</td>;
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
        return <div>
            <table style={baseTableStyle}>
                <ColGroup {...this.props}/>
                <Thead {...this.props} />
                <Tbody {...this.props}/>
            </table>
        </div>;
    }


});


export default Table;
