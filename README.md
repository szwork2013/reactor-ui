Reactor UI
=========

Reactor UI is a reusable UI components written in react.

Note that this is very much on its initial development phase.

#Components

##Buttons

### Basic Buttons

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
| disable      | boolean | Setting this to true will disable the button | N | false |
| scheme       | string | The scheme of the button. Possible values (green,blue,violet,red,orange)  | N | undefined/null |
| width        | string | The width of the button  |  N |  auto |
| text         | string | The text of the button | N | undefined/null |
| iconCls      | string | The icon class for the button | N | undefined/null |
| onClick      | function | Listener function when the button is clicked | N


##Tabs


##Forms

##Panel

##Dialog

##SideNav

##Table

##Containers