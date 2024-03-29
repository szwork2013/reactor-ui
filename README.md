Reactor UI
=========

Reactor UI is a reusable UI components written in react.

Note that this is very much on its initial development phase, a work in progress.

#ChangeLog

* 0.0.18
      * Portlet : Added Tab Action bars
      * View : Added view component 
* 0.0.17
      * Portlet : added functionality to add ActionBars on headers
* 0.0.15
      * Datatable : added, setter,renderer,formatter support
      * Datatable : initial Forms integration added
      * Forms/Datatable : various cleanup and fixes

* 0.0.12
      * Portlet: Added Portlet Component
* 0.0.10
      * Datatable: renderer now implemented
      * Datatable: cell editing is off by default
      * Datatable: default cell style can be applied e.g. Column cellAlign={"center"}  

#Router

  reaction is a basic router that can be used to do routing within reactor-ui app.

```javascript

    // /users route, can be chained to define sub routes
    reaction.route("/users")
      .default(<UsersList/>)
      .route("/edit/{id}", <EditUser/> ); // /users/edit/{id}

    reaction.route("/reports", <Reports />);
    reaction.route("/products", <Reports />);

    reaction.onRoute("*", listener ); //whenever a route is activated, listener is called
    reaction.onRoute("/users", anotherlistener ); //listen to /users route

    reaction.run(document.getElementById("container"));

  ```

#Components

##Buttons

### Basic Buttons

![alt buttons](https://raw.githubusercontent.com/wmira/reactor-ui/master/ss/buttons.png)

```javascript

    var Btn = require("reactor-ui/button/Btn");

    <Btn onClick={function} scheme="green" text="Click Me"/>

    <Btn  disabled={true} scheme="violet">
        Click Me <span className="fa-heart"/>
    </Btn>

```

#### Properties

| Property     | Type | Description   | Required  | Default  |
| ------------:|------:|-------------:| ---------:|---------:|
| disabled      | boolean | Setting this to true will disable the button | N | false |
| scheme       | string | The scheme of the button. Possible values (green,blue,violet,red,orange)  | N | undefined/null |
| width        | string | The width of the button  |  N |  auto |
| text         | string | The text of the button | N | undefined/null |
| iconCls      | string | The icon class for the button | N | undefined/null |
| onClick      | function | Listener function when the button is clicked | N


### Button Groups

![alt button groups](https://raw.githubusercontent.com/wmira/reactor-ui/master/ss/buttongroups.png)

```javascript

   <BtnGroup scheme="violet" active="clock">
        <Btn iconCls="fa fa-clock-o" value="clock"/>
        <Btn iconCls="fa fa-heart" value="heart"/>
        <Btn iconCls="fa fa-adjust" value="adjust"/>
   </BtnGroup>

```


#### Properties

| Property     | Type | Description   | Required  | Default  |
| ------------:|------:|-------------:| ---------:|---------:|
| disabled      | boolean | Setting this to true will disable the button group | N | false |
| scheme       | string | The scheme of the button. Possible values (green,blue,violet,red,orange)  | N | undefined/null |
| onClick      | function | Listener function when a button from the group is clicked | N | |


### Button Menus/ Button Dropdown

![alt button dropdown](https://raw.githubusercontent.com/wmira/reactor-ui/master/ss/buttondropdown.png)

```javascript

   <BtnDrpDown scheme="blue" defaultText="Select Action" items={dropdownList}/>

   <BtnDrpDown scheme="red" defaultText="Select Action">
        <List>
            <ListItem value="1">One</ListItem>
            <ListItem value="2">Two</ListItem>
            <ListItem value="3">Three</ListItem>
        </List>
   <BtnDrpDown>

```

#### Properties

| Property     | Type | Description   | Required  | Default  |
| ------------:|------:|-------------:| ---------:|---------:|
| disabled      | boolean | Setting this to true will disable the button group | N | false |
| scheme       | string | The scheme of the button. Possible values (green,blue,violet,red,orange)  | N | undefined/null |
| onClick      | function | Listener function when an item is clicked | N | |


##Tabs

![alt tabs](https://raw.githubusercontent.com/wmira/reactor-ui/master/ss/tabs.png)

```javascript

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

```
#### Properties


##Panel

![alt tabs](https://raw.githubusercontent.com/wmira/reactor-ui/master/ss/panels.png)

```javascript
    <Panel title="Panel Example" closeable={true} collapsable={true} maxHeight="150px">
        <div>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Esse enim quam vellet iniquus iustus poterat inpune.
           </p>
        </div>
    </Panel>
```

##SideNav
    A vertical Side Navigation component.

![alt sidenav](https://raw.githubusercontent.com/wmira/reactor-ui/master/ss/sidenav.png)

```javascript

    var { SideNav, NavGroup, Nav } = require("reactor-ui/sidenav");

    var navi = [
        { id: 'dashboard', icon: "fa fa-dashboard" , text: "Dashboard"},
        { id: 'products', icon: "fa fa-cube", text: "Products" ,
            navlist: [
              { icon: 'fa fa-desktop', id: 'manage' ,text: "Manage Product" },
              { icon: 'fa fa-cog', id: 'suppliers' ,text: "Suppliers" }
            ]
        },
        { id: 'inventory', icon: 'fa fa-database' ,text: "Inventory"},
        { id: 'deliveries', icon: 'fa fa-truck' ,text: "Deliveries"},
        { id: 'reports', icon: 'fa fa-bar-chart' ,text: "Reports" }
     ];

    React.render(<SideNav navs={navi}/>,document.getElementById('cont1'));

```

| Property     | Type | Description   | Required  | Default  |
| ------------:|------:|-------------:| ---------:|---------:|
| navs        | obj | The navigation structure  to create | Y | n/a |
| onSelection      | function | Listener function when an item is selected. This gets passed an object { group: ..., id: ...} | N | n/a |



##Forms

##Dialog

##DataGrid/DataTable

```javascript
    <Datagrid height={400} width={800} data={data}>
            <Column flex='1' id='shipmentNo' title='Shipment No'/>
            <Column flex='1' id='productId' title='Product Id'/>
            <Column flex='5' id='productName' title='Product Name'/>
            <Column id='quantity' title='Quantity'/>
            <Column id='price' title='Price'/>
    </Datagrid>
```
![alt datagrid](https://raw.githubusercontent.com/wmira/reactor-ui/master/ss/datagrid.png)

# Contributing
