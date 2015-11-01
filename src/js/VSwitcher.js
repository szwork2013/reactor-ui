
import React from 'react';

const View = React.createClass({

    getInitialState : function() {
        return { visible : this.props.visible, view: this.props.view };
    },

    componentWillReceiveProps : function(newProps) {
        if ( this.state.visible !== newProps.visible ) {
            this.setState({visible : newProps.visible} );
        }
    },

    shouldComponentUpdate : function(nextProps, nextState) {
        return this.state.visible !== nextState.visible;
    },

    render : function() {
        var divStyle = { display: this.state.visible ? "block" : "none" };

        var theElement =  null;
        if ( this.props.element ) {
            theElement = this.props.element;
        } else {
            theElement = <div ref={"el"}></div>;
        }
        var name = null;
        if ( typeof this.props.view === 'string' ) {
            name = this.props.view;
        } else {
            name = this.props.ref;

        }

        return (<div data-vp-name={name} style={divStyle}>
            {theElement}
        </div>);
    }


});


var ViewSwitcher = React.createClass({


    getInitialState : function() {
        //create all the views from the definition
        var views = this.props.views || [];
        var viewPrefix = this.props.viewPrefix ? this.props.viewPrefix : "";
        var visible = this.props.visible;

        return { views: views, viewPrefix: viewPrefix || '' , visible: visible };
    },

    componentWillReceiveProps(nextProps) {
        this.setState( {visible: nextProps.visible});
    },

    shouldComponentUpdate : function(nextProps, nextState) {
        //if the current visible is not equal to the next visible
        return ( nextState.visible && (nextState.visible !== this.state.visible ) );
    },

    render : function() {
        var views = this.state.views;
        var prefix = "rui-vs-" + this.state.viewPrefix;

        return (<div className={prefix}> {
            views.map(view => {
                if ( typeof view === 'string' ) {
                    return <View ref={view} key={view} view={view} visible={( this.state.visible === view ) }/>;
                } else {
                    return <View ref={view.ref} element={view.element} visible={( this.state.visible === view.ref ) } />;
                }
            })
        }
        </div>);
    },

    show : function(view) {
        var visible = this.state.visible;
        if ( visible !== view ) {
            this.setState({visible: view});
            //FIXME: disable for now, rethink
            // this._dispatchEvents(view,visible);
        }
    },

    el : function(view) {
        var refViews = this.refs[view];
        if ( refViews.refs.el) {
            return this.refs[view].refs.el;
        }
        return null;
    }

});

export default ViewSwitcher;
