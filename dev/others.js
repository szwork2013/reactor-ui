
var React = require("react");
var Pill = require("reactor-ui/Pill");
import {Btn,BtnGroup,BtnDrpDown} from 'reactor-ui/button';
import {toast,Toast} from 'reactor-ui/alert/Toast';


React.render(
    <div className="container">
        <div className="row">
            <div className="col-lg-6">
                <span>
                    <Pill ><span className="fa fa-heart"></span> Love</Pill>
                    <Pill scheme="green"><span className="fa fa-heart"></span> Love</Pill>
                    <Pill scheme="blue"><span className="fa fa-heart"></span> Love</Pill>
                </span>
            </div>
            <div className="col-lg-6">
                <span>
                    <Pill scheme="violet"><span className="fa fa-heart"></span> Love</Pill>
                    <Pill scheme="red"><span className="fa fa-heart"></span> Love</Pill>
                    <Pill scheme="orange"><span className="fa fa-heart"></span> Love</Pill>
                </span>
            </div>
        </div>
    </div>,

    document.getElementById("cont1"));


React.render(
    <span>
        <Pill size="large"><span className="fa fa-thumbs-o-up"></span> Thumbs Up</Pill>
        <Pill size="large" scheme="green"><span className="fa fa-thumbs-o-up"></span> Thumbs Up</Pill>
        <Pill size="large" scheme="blue"><span className="fa fa-thumbs-o-up"></span> Thumbs Up</Pill>
        <Pill size="large" scheme="violet"><span className="fa fa-thumbs-o-up"></span> Thumbs Up</Pill>
        <Pill size="large" scheme="red"><span className="fa fa-thumbs-o-up"></span> Thumbs Up</Pill>
        <Pill size="large" scheme="orange"><span className="fa fa-thumbs-o-up"></span> Thumbs Up</Pill>
    </span>,
document.getElementById("cont2"));


React.render(
    <span>
        <Btn text="Click Me"/><span style={{marginRight: "4px"}}/>
        <Btn scheme="green" text="Click Me"/><span style={{marginRight: "4px"}}/>
        <Btn scheme="blue" text="Click Me"/><span style={{marginRight: "4px"}}/>
        <Btn scheme="violet" text="Click Me"/><span style={{marginRight: "4px"}}/>
        <Btn scheme="red" text="Click Me"/><span style={{marginRight: "4px"}}/>
        <Btn scheme="orange" text="Click Me"/><span style={{marginRight: "4px"}}/>
        <Btn scheme="orange" disabled={true} text="Click Me"/><span style={{marginRight: "4px"}}/>
        <Btn scheme="orange" active="ok" value="ok" text="Click Me"/><span style={{marginRight: "4px"}}/>
        <Btn scheme="green" styles={[{color: 'red'}]} active="ok" value="ok" text="Click Me"/><span style={{marginRight: "4px"}}/>
    </span>,
document.getElementById("cont3"));


var BtnGroupDemo = React.createClass({

    getInitialState: function() {
        return {disabled:  this.props.disabled ? true : false };
    },
    onClick : function() {
        this.setState({disabled : !this.state.disabled });
    },

    render: function() {
        return <div>
            <Btn width="120px" text={ this.state.disabled ? "Enable" : "Disable"} onClick={this.onClick} /><span> </span>
            <BtnGroup disabled={this.state.disabled} scheme="green" active="clock">
                <Btn iconCls="fa fa-clock-o" value="clock"/>
                <Btn iconCls="fa fa-heart" value="heart"/>
                <Btn iconCls="fa fa-adjust" value="adjust"/>
            </BtnGroup>
        </div>;
    }

});

document.getElementById('showtoast').addEventListener('click', () => {
    toast(<Toast ><span>{"Im toastedxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxwd dewwwwwwwwwwwwww fweeeeeeeeeeeee fweeeeeeeeeeeeeee dfwefwfwe"}</span> </Toast>);
});

// var ToastDemo = React.createClass({
//
//     getInitialState: function() {
//         return {showError: false };
//     },
//     onClick : function() {
//         this.setState({showError : !this.state.showError });
//     },
//     onCompleted() {
//         this.setState({showError: false});
//     },
//     render: function() {
//         return <div>
//             <Btn width="120px" text={ "Toast It"} onClick={this.onClick} /><span> </span>
//             {this.state.showError === true ? <Toast onCompleted={this.onCompleted}><span>{"Im toasted"}</span> </Toast> : null }
//         </div>;
//     }
//
// });


React.render(<BtnGroupDemo/>,document.getElementById("cont4"));
//React.render(<ToastDemo/>,document.getElementById("cont7"));

var dropdownList = ["Action 1", "Action 2", "Action 3"];

React.render(<BtnDrpDown defaultText="Select Action" items={dropdownList}/>,
    document.getElementById("cont5"));

React.render(<BtnDrpDown scheme="blue" defaultText="Select Action" items={dropdownList}/>,
    document.getElementById("cont6"));
