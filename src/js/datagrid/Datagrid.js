

import React from 'react';

import Table from './Table';
import TableColumns from './TableColumns';
import Scroller from './Scroller';
import {createColumnConfig} from './utils';

const Datagrid = React.createClass({

    propTypes:  {
        data : React.PropTypes.array
    },

    render() {
        const cols = createColumnConfig(this.props);
        return <Scroller >
            <Table data={this.props.data} cols={cols} />
            <TableColumns cols={cols}/>
        </Scroller>;
    }

});
export {Datagrid};
export default Datagrid;
