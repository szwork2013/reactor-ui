'use strict';

var React = require("react");

var TabSet = require("reactor-ui/tab/TabSet");
var Tab = require("reactor-ui/tab/Tab");

React.render(
    <TabSet >
        <Tab text="Tab 1" closeable={true} id="tab1">

            This is tab 1

        </Tab>
        <Tab text="Tab 2" closeable={false} id="tab2">

            This is tab 2

        </Tab>
        <Tab text="Tab 3" closeable={false} id="tab3">

            This is tab 3
        </Tab>
    </TabSet>
    ,document.getElementById("tab-cont1"));


React.render(
    <TabSet controlStyle="material">
        <Tab text="Tab 1" closeable={true} id="tab1">

            This is tab 1

        </Tab>
        <Tab text="Tab 2" closeable={false} id="tab2">

            This is tab 2

        </Tab>
        <Tab text="Tab 3" closeable={false} id="tab3">

            This is tab 3
        </Tab>
    </TabSet>
,document.getElementById("tab-cont2"));

React.render(

    <TabSet style={{minHeight: "200px" ,maxHeight: "200px", "overflow" : "auto"}} controlStyle="pills">
        <Tab text="Tab 1" closeable={true} id="tab1">

            This is tab 1

        </Tab>
        <Tab text="Tab 2" closeable={false} id="tab2">

            This is tab 2

        </Tab>
        <Tab text="Tab 3" closeable={false} id="tab3">

            This is tab 3
        </Tab>
    </TabSet>
    ,document.getElementById("tab-cont3"));

