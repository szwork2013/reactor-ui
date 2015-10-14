
import React from 'react/addons';
import radium from 'radium';
import {styles} from '../baseStyle';


const style = {
    base: {
        color: '#FFF',
        position: 'fixed',
        zIndex: 99999,
        right: '-220px',
        bottom: '12px',
        padding: 16,
        minWidth: 220,
        transition: 'right 0.16s ease-in',
        fontWeight: 700,
        textAlign: 'center'
    },
    baseVisible: {
        right: '12px'
    },
    baseHidden: {
        right: '-220px'
    }
};

const TYPES = {
    success : 'success',
    error: 'error',
    warning: 'warning',
    info: 'info'
};

const TYPES_TO_SCHEME = {
    success: 'green',
    error : 'red',
    warning: 'orange',
    info: 'blue'
};

const WAITFOR_TIMEOUT = 500;

const Toast = radium(React.createClass({

    propTypes: {
        type: React.PropTypes.oneOf([TYPES.success,TYPES.error,TYPES.warning,TYPES.info]),
        duration: React.PropTypes.number,
        onToastCompleted: React.PropTypes.func
    },

    getDefaultProps: function () {
        return { type: TYPES.success, duration: 2000 };
    },
    componentDidUpdate() {
        if ( this.state.visible === false && this.state.goneAnimationCompleted === true  ) {
            if ( this.props.onToastCompleted ) {
                this.props.onToastCompleted();
            }
        }
        //wait till animation to show is completed
        setTimeout( () => {
            this.setState({goneAnimationCompleted: true});
        },this.props.duration + WAITFOR_TIMEOUT);
    },
    componentDidMount() {
        this._toastEl = React.findDOMNode(this.refs.toastcontainer);
        this._toastEl.addEventListener('transitionend',this.transitionEnd);
        setTimeout( ()=> {
            this.setState({visible: true});
        },0);
        setTimeout( () => {
            this.setState({visible: false});
        },this.props.duration);

    },
    getInitialState() {
        return { visible : false ,goneAnimationCompleted: false };
    },

    render() {
        const type = this.props.type;
        return <div ref="toastcontainer" style={[style.base,styles[TYPES_TO_SCHEME[type]], this.state.visible ? style.baseVisible : style.baseHidden]}>{this.props.children}</div>;

    }
}));

export default Toast;
