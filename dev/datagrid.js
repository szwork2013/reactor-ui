/*globals require,module,document */
/* jshint -W097, esnext: true */
'use strict';

import React from 'react';
import {Datatable, Column} from   'reactor-ui/datagrid';

import data from './griddata';

/*
React.render(
    <Datagrid  data={data}>
        <Column flex={2} id='shipmentNo' title='Shipment No'/>
        <Column flex={2} id='productId' title='Product Id'/>
        <Column flex={6} id='productName' title='Product Name'/>
        <Column flex={2} id='quantity' title='Quantity'/>
        <Column flex={2} id='price' title='Price'/>
    </Datagrid>,
    document.getElementById('cont1'));
*/

React.render(
    <Datatable  data={data}>
        <Column id='shipmentNo' title='Shipment No'/>
        <Column id='productId' title='Product Id'/>
        <Column id='productName' title='Product Name'/>
        <Column id='quantity' title='Quantity'/>
        <Column id='price' title='Price'/>        
    </Datatable>,
    document.getElementById('cont1'));
