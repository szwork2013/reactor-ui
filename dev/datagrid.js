
import React from 'react';
import ReactDOM from 'react-dom';
import {Datatable, Column,Datagrid} from   'reactor-ui/datagrid';

import TabActionBar from 'reactor-ui/portlet/TabActionBar';


//import data from './griddata';

var data1 = [
    {
        "shipmentNo": 891735,
        "productId": 0,
        "productName": "e29f0d5e-0e8c-4a15-a89a-292da90f0096",
        "quantity": 820071,
        "pricePerItem" : 5,
        "price": "$6,842.26",
        "customer": "Moss Adkins"
    },
    {
        "shipmentNo": 987531,
        "productId": 1,
        "productName": "429f1d5e-0e8c-6a25-a89a-232da40f0096",
        "quantity": 834072,
        "price": "$2,832.26",
        "pricePerItem" : 5,
        "customer": "Jeff Rollins"
    },
    {
        "shipmentNo": 987531,
        "productId": 2,
        "productName": "429f1d5e-0e8c-6a25-a89a-232da40f0096",
        "quantity": 834072,
        "price": "$2,832.26",
        "pricePerItem" : 5,
        "customer": "Jeff Rollins"
    }

];


var data2 = [
    {
        "shipmentNo": 4444,
        "productId": 1,
        "pricePerItem" : 5,
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
// var idRenderer = function(recdata) {
//     return <Pill scheme="blue">{recdata.formattedValue}</Pill>; //<span style={{color: 'red', fontWeight: 'bold'}}>{recdata.formattedValue}</span>;
// };
// const onEdit = function(editData) {
//
//     var field = editData.config.id;
//     var index = editData.index;
//
//     data[index][field]= editData.value;
// };
//
// const totalFormatter = function(value) {
//     return "$" + value;
//
// };
// const totalSetter = function(record,id) {
//
//     return record.quantity * record.pricePerItem;
//
// };

// const totalRenderer = function(data) {
//     return "tots renderer";
// };

function renderGrid() {

    ReactDOM.render(
        <Datagrid data={data}>
            <Column width={10} cellAlign={"center"} id='shipmentNo'/>
            <Column hidden={false} width={100} id='productId' title='Product Id'/>
            <Column id='productName' title='Product Name'/>
            <Column editable={true}  id='quantity' title='Quantity'/>
            <Column id='pricePerItem' title='Price Per Item' />
            <Column id='total' title='Total' />
        </Datagrid>,
        document.getElementById('cont1'));
}


document.getElementById('btn1').addEventListener('click',function() {
    data = data2;

    renderGrid();
});

renderGrid();
//
//
// var active1 = "shipment";
//
// var onTabClick = function(name) {
//     active1 = name;
//     renderPortlet1();
// };
// var renderPortlet1 = function() {
//
//     React.render(
//         <Portlet titleIcon="fa fa-bar-chart" title="React Panel" subtitle="this is a subtitle">
//             <TabActionBar active='shipment' onTabActivated={onTabClick}>
//                 <TAction name='shipment' text=" Shipment "></TAction>
//                 <TAction name='settlement' text=" Settlement "></TAction>
//                 <TAction name='empties' text=" Empties "></TAction>
//             </TabActionBar>
//             <View name="shipment" visible={active1}>
//                 <Datatable  data={data}>
//                     <Column cellAlign={"center"} id='shipmentNo' title='Shipment No' renderer={idRenderer}/>
//                     <Column id='productId' title='Product Id'/>
//                     <Column id='price' title='Price'/>
//                 </Datatable>
//             </View>
//             <View name="settlement" visible={active1}>
//                 <span>Settlement</span>
//             </View>
//             <View name="empties" visible={active1}>
//                 <span>Empties</span>
//             </View>
//         </Portlet>,
//         document.getElementById('p1')
//     );
// };
// renderPortlet1();
// React.render(
//     <Portlet titleIcon="fa fa-bar-chart" title="React Panel" subtitle="this is a subtitle">
//         <ActionBar>
//             <Action><Btn scheme="green" text=" Btn 1 "/></Action>
//             <Action><Btn scheme="green" text=" Btn 2 "/></Action>
//             <Action><Btn scheme="green" text=" Btn 3 "/></Action>
//         </ActionBar>
//
//         <View name="datagrid" visible="datagrid2">
//             <Datatable  data={data}>
//                 <Column cellAlign={"center"} id='shipmentNo' title='Shipment No' renderer={idRenderer}/>
//                 <Column id='productId' title='Product Id'/>
//                 <Column id='price' title='Price'/>
//             </Datatable>
//         </View>
//         <View name="datagrid2" visible="datagrid2">
//             <Datatable  data={data}>
//                 <Column cellAlign={"center"} id='shipmentNo' title='Shipment No' renderer={idRenderer}/>
//                 <Column id='productId' title='Product Id2'/>
//                 <Column id='price' title='Price'/>
//             </Datatable>
//         </View>
//     </Portlet>,
//     document.getElementById('p2')
// );
