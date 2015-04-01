'use strict';

var React = require("react");

var TabSet = require("reactor-ui/tab/TabSet");
var Tab = require("reactor-ui/tab/Tab");

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
,document.getElementById("tab-cont"));

