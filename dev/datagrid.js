/*globals require,module,document */
/* jshint -W097, esnext: true */
'use strict';

import React from 'react';
import {Datagrid, Column} from   'reactor-ui/datagrid';

import data from './griddata';

React.render(
    <Datagrid height={400} width={800} data={data}>
        <Column flex='1' id='shipmentNo' title='Shipment No'/>
        <Column flex='1' id='productId' title='Product Id'/>
        <Column flex='5' id='productName' title='Product Name'/>
        <Column id='quantity' title='Quantity'/>
        <Column id='price' title='Price'/>
    </Datagrid>,
document.getElementById('cont1'));

/*

 */