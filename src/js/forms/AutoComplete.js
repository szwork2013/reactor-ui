'use strict';

import React from 'react';
import InputMixin from './InputMixin';
import LabelMixin from './LabelMixin';
import assign from 'object-assign';

const AutoCompleteResult = React.createClass({


    resultItemClicked(index) {
        this.props.onResultItemClicked(this.props.data[index]);
    },

    createResultItem(result,index) {
        return <div onClick={this.resultItemClicked.bind(null,index)} dataIndex={index} className="rui-form-ac-result" style={ {padding: "8px 6px"}}>{result.text}</div>;

    },
    render() {
        var display = this.props.data ? 'block' : 'none';
        var pos = this.props.anchorPosition;
        var style = assign({border: "1px solid #D1D1D1", borderTop: "none", display: display,position: 'absolute'},pos);

        return <div  style={style} >
            { (this.props.data||[]).map( (res,index) => {
                return this.createResultItem(res,index);
            }) }
        </div>;

    }

});

const KEY_BACKSPACE = 8;

const AutoComplete = React.createClass({

    propTypes: {
        requiredName : React.PropTypes.string.isRequired
    },
    mixins: [InputMixin,LabelMixin],

    contextTypes: {
        model: React.PropTypes.object.isRequired,
        changeListener : React.PropTypes.any,
        inputRegistry: React.PropTypes.any
    },

    getInitialState() {
        return { results: undefined, inputActive: false , hasValue :  this.getValue() ? true : false, hasPlaceholder: this.props.placeholder ? true : false };
    },

    getValue() {
        return this.getInputValue(); // this.props.model[this.props.name] || "";
    },

    determineAnchorAbsolutePos() {

        var anchorEl = React.findDOMNode(this.refs.acCont);
        var computedStyle= window.getComputedStyle(anchorEl);
        var computedHeight = computedStyle.getPropertyValue("height");
        var computedWidth = computedStyle.getPropertyValue("width");

        var adjustmentHeight = parseInt(computedHeight,10);
        var width = parseInt(computedWidth, 10) - 1;
        var x = 0;
        var y = 0;

        while(anchorEl) {
            x += (anchorEl.offsetLeft - anchorEl.scrollLeft + anchorEl.clientLeft);
            y += (anchorEl.offsetTop - anchorEl.scrollTop + anchorEl.clientTop);
            anchorEl = anchorEl.offsetParent;
        }
        return { left: x, top: y  + adjustmentHeight, width:width };

    },

    showMatchingResults(query) {
        var str;
        var data = this.props.data || [];
        var results = data.filter (  datum => {
            str = JSON.stringify(datum);
            return ( str.includes(query) );
        });

        this.setState( {results: results, anchorPosition: this.determineAnchorAbsolutePos() });
    },

    acInputChange() {

        if ( this._acqueryRunner ) {
            clearTimeout(this._acqueryRunner);
        }
        var inputVal = React.findDOMNode(this.refs.acInput).value;

        var run = () => {
            this.showMatchingResults(inputVal);
        };
        this._acqueryRunner = setTimeout(run,500);
    },

    resultSelected(selected) {
        try {
            if ( this.props.selectionListener ) {
                this.props.selectionListener(selected);
            }
        } catch ( ex ) {
        }
        this.setState({results: undefined, selection: selected});
    },

    onKeyUp(e) {
        if ( e.keyCode === KEY_BACKSPACE ) {
            React.findDOMNode(this.refs.acInput).value = '';
            this.setState({selection: undefined, });
        }
    },
    showResults() {
        if ( this.state.results ) {
            return <AutoCompleteResult onResultItemClicked={this.resultSelected} data={this.state.results} anchorPosition={this.state.anchorPosition}/>;
        } else {
            return undefined;
        }
    },
    renderToggle() {
        return <div style={{top: 14, right: 10, position: 'absolute'}}><div className="rui-arrow-down rui-arrow-down-inactive"></div></div>;
    },
    renderInput() {
        var value,obj;
        if ( this.state.selection ) {
            value = this.state.selection.text;
        } else {
            obj = this.getInputValue();
            if ( obj ) {
                value = obj.text;
            }
        }
        return <input onKeyDown={this.onKeyUp} value={value} ref="acInput" onChange={this.acInputChange} placeholder={this.props.placeholder} type="text" autoComplete="off"
            style={ { height: "100%", width: "100%" ,position: "relative", left: "0px", tabindex: "tabindex"}}   />;

    },
    render : function() {

        //var inputActive = false;
        return (
            <div className="rui-form-cont">
                {this.getLabel()}
                <div style={{position: 'relative'}} ref="acCont" className="rui-form-ac-cont rui-form-input" onClick={this.containerClick}>
                    {this.renderInput()}
                    {this.renderToggle()}
                </div>
                {this.showResults()}
            </div>
        );
    }

});

module.exports = AutoComplete;
