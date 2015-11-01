
import React from 'react';
import {render,findDOMNode,unmountComponentAtNode} from 'react-dom';



import radium from 'radium';
import {styles} from '../baseStyle';


const {createElement, cloneElement} = React;

const style = {
    base: {
        color: '#FFF',
        position: 'relative',
        transition:  'right 0.16s ease-in',
        padding: 16,
        minWidth: 300,
        fontWeight: 400,
        textAlign: 'center'
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

const Toast = radium(React.createClass({
    propTypes: {
            type: React.PropTypes.oneOf([TYPES.success,TYPES.error,TYPES.warning,TYPES.info])
    },
    getInitialState() {
        return { mounted: false };
    },
    getDefaultProps: function () {
        return { type: TYPES.success, duration: 2000 };
    },
    componentWillUnmount() {
        if ( this.props.onComponentUnmounted ) {
            this.props.onComponentUnmounted();
        }
    },
    componentDidMount() {
        setTimeout( () => {
            this.setState({mounted: true});
            if ( this.props.onComponentMounted ) {
                this.props.onComponentMounted(findDOMNode(this.refs.toastcontainer),this);
            }
        }, 0);
    },

    render() {
        const type = this.props.type;
        const rightStyle = this.state.mounted ? {right: 0 } : { right: -320 };
        return <div style={[style.base,styles[TYPES_TO_SCHEME[type]],rightStyle]}>{this.props.children}</div>;

    }
}));

let toastContainer;

const createContainer = function() {
    if ( !toastContainer ) {
        toastContainer = document.createElement("div");
        const {style} = toastContainer;
        style.position = 'fixed';
        style.right = '12px';
        style.bottom = '12px';
        style.overflow = 'visible';
        style.zIndex = 9999999;
        document.body.appendChild(toastContainer);

    }
};

const onComponentMounted = (mountNode,el,toastInstance) => {

    setTimeout( () => {
        toastInstance.setState({mounted:false});
        el.addEventListener('transitionend', ()=> {
            React.unmountComponentAtNode(mountNode);
        });
    }, toastInstance.props.duration );
}

const onComponentUnmounted = (mountNode) => {
    setTimeout( () => {
        toastContainer.removeChild(mountNode);
    }, 0);
};

const createToastContainer = () => {
    const element = document.createElement('div');
    element.style.margin = '2px';
    return element;
};

export function toast(toastElement) {
    createContainer();
    const toastContainerEl = createToastContainer();

    toastContainer.appendChild(toastContainerEl);
    render(cloneElement(toastElement,{
                        onComponentUnmounted: onComponentUnmounted.bind(null, toastContainerEl),
                        onComponentMounted: onComponentMounted.bind(null,toastContainerEl)
                    }),
                    toastContainerEl);
};

export {Toast};
export default Toast;
