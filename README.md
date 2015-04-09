Reactor UI
=========

Reactor UI is a reusable UI components written in react.

Note that this is very much on its initial development phase.

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

##Forms


##Dialog

##SideNav

##Table

##Containers