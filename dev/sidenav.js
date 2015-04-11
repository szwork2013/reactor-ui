'use strict';

var React = require("react");

var { SideNav, NavGroup, Nav } = require("reactor-ui/sidenav");

var navi = [
    { id: 'dashboard', icon: "fa fa-dashboard" , text: "Dashboard"},
    { id: 'products', icon: "fa fa-cube", text: "Products" ,
        navlist: [
          { id: 'manage' ,text: "Manage Product" },
          { id: 'suppliers' ,text: "Suppliers" }
        ]
    },
    { id: 'inventory', icon: 'fa fa-database' ,text: "Inventory"},
    { id: 'deliveries', icon: 'fa fa-truck' ,text: "Deliveries"},
    { id: 'reports', icon: 'fa fa-bar-chart' ,text: "Reports" }
 ];

React.render(<SideNav navs={navi}/>,document.getElementById('cont1'));