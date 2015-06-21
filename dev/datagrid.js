/*globals require,module,document */
/* jshint -W097, esnext: true */
'use strict';

import React from 'react';
import {Datatable, Column} from   'reactor-ui/datagrid';
import Pill from 'reactor-ui/Pill';
import Portlet from 'reactor-ui/portlet';

import reaction from 'reactor-ui/reaction';
//import data from './griddata';

var data1 = [
    {
        "shipmentNo": 891735,
        "productId": 0,
        "productName": "e29f0d5e-0e8c-4a15-a89a-292da90f0096",
        "quantity": 820071,
        "price": "$3,842.26",
        "customer": "Moss Adkins"
    }

];
var data3 = [];

var data2 = [
    {
        "shipmentNo": 4444,
        "productId": 1,
        "productName": "cf35124b-0e41-45d2-a7de-b41008b780c6",
        "quantity": 993157,
        "price": "$2,763.16",
        "customer": "Watson Cervantes"
    }
];

var data = data1;

/*
var routes = (
    <Route path="/">
        <Route path="channels">
            <Route path="/list" render={Sample}/>
            <Route path="/add" render={Sample}/>
            <Route path="/edit/{:id}" render={Sample}/>
        </Route>
        <Route path="reports">
            <Route path="/users" render={Sample}/>
            <Route path="/sales" render={Sample}/>
            <Route path="/etc" render={Sample}/>
        </Route>
    </Route>
);


Reaction.run(routes,
    document.getElementById('cont1'));

*/

    /*
*/
var idRenderer = function(recdata) {
    return <Pill scheme="blue">{recdata.formattedValue}</Pill>; //<span style={{color: 'red', fontWeight: 'bold'}}>{recdata.formattedValue}</span>;
};

function renderGrid() {

    React.render(
        <Datatable  data={data}>
            <Column cellAlign={"center"} id='shipmentNo' title='Shipment No' renderer={idRenderer}/>
            <Column id='productId' title='Product Id'/>
            <Column id='productName' title='Product Name'/>
            <Column id='quantity' title='Quantity'/>
            <Column id='price' title='Price'/>
        </Datatable>,
        document.getElementById('cont1'));
}


document.getElementById('btn1').addEventListener('click',function() {
    data = data2;

    renderGrid();
});

renderGrid();



React.render(
    <Portlet titleIcon="fa fa-bar-chart" title="React Panel" subtitle="this is a subtitle">
        <Datatable  data={data}>
            <Column cellAlign={"center"} id='shipmentNo' title='Shipment No' renderer={idRenderer}/>
            <Column id='productId' title='Product Id'/>
            <Column id='price' title='Price'/>
        </Datatable>
    </Portlet>,
    document.getElementById('p1')
);
