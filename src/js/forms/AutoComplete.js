'use strict';

import React from 'react';
import InputMixin from './InputMixin';
import LabelMixin from './LabelMixin';
import assign from 'object-assign';



var parseText = function(path,obj) {

    if ( typeof obj === 'string' ) {
        return obj;
    }
    if ( obj ) {
        return obj[path|| 'text'];
    }
    return '';
};

const AutoCompleteResult = React.createClass({


    resultItemClicked(index) {
        this.props.onResultItemClicked(this.props.data[index]);
    },

    createResultItem(result,index) {
        var text =  parseText(this.props.selectionPath,result);
        var rendered = text;
        if ( this.props.selectionRenderer ) {
            rendered = this.props.selectionRenderer(text,result);
        }
        return <div onClick={this.resultItemClicked.bind(null,index)} dataIndex={index} className="rui-form-ac-result" style={ {padding: "8px 6px"}}>{rendered}</div>;

    },
    render() {
        var display = this.props.data ? 'block' : 'none';
        var pos = this.props.anchorPosition;
        var style = assign({border: "1px solid #D1D1D1", borderTop: "none", display: display,position: 'absolute'},pos);

        return <div className="rui-form-ac-result-cont"  style={style} >
            { (this.props.data||[]).map( (res,index) => {
                return this.createResultItem(res,index);
            }) }
        </div>;

    }

});

const KEY_BACKSPACE = 8;
const KEY_ESC = 27;

const AutoComplete = React.createClass({

    propTypes: {
        requiredName : React.PropTypes.string.isRequired,
        selectionPath : React.PropTypes.string,
        selectionRenderer: React.PropTypes.func,
        searchPath: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.array,
        ])
    },

    getDefaultProps() {
        return {
            selectionRenderer: undefined,
            selectionPath : 'text'
        };
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
        return this.getInputValue();
    },

    determineAnchorAbsolutePos() {

        var anchorEl = React.findDOMNode(this.refs.acCont);
        var computedStyle= window.getComputedStyle(anchorEl);
        var computedHeight = computedStyle.getPropertyValue("height");
        var computedWidth = computedStyle.getPropertyValue("width");

        var adjustmentHeight = parseInt(computedHeight,10);
        var width = parseInt(computedWidth, 10);
        var x = 0;
        var y = 0;


            x += (anchorEl.offsetLeft - anchorEl.scrollLeft + anchorEl.clientLeft);
            y += (anchorEl.offsetTop - anchorEl.scrollTop + anchorEl.clientTop);


        return { left: x - 1, top: y  + adjustmentHeight, width:width };

    },

    _searchObjectFilter(searchStr,obj) {
        var tosearch,str;
        var searchFields;
        if ( typeof this.props.searchPath === 'string' ) {
            searchFields = [];
            searchFields.push(this.props.searchPath);
        } else if (Array.isArray(this.props.searchPath) ){
            searchFields = this.props.searchPath;
        }

        if ( searchFields ) {
            tosearch = {};
            searchFields.forEach ( field => tosearch[field] = obj[field] );
        } else {
            tosearch = obj;
        }

        str = JSON.stringify(tosearch);
        return str.includes(searchStr);
    },

    showMatchingResults(query) {

        var data = this.props.data || [];
        var results = data.filter ( this._searchObjectFilter.bind(this,query) );

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
        } else if ( e.keyCode === KEY_ESC ) {
            this.setState({results: undefined, });
        }
    },
    showResults() {
        if ( this.state.results ) {
            return <AutoCompleteResult selectionPath={this.props.selectionPath} onResultItemClicked={this.resultSelected} data={this.state.results} anchorPosition={this.state.anchorPosition}/>;
        } else {
            return undefined;
        }
    },
    renderToggle() {
        return <div style={{top: 14, right: 10, position: 'absolute'}}><div className="rui-arrow-down rui-arrow-down-inactive"></div></div>;
    },

    _parseValue(obj) {
        return parseText(this.props.selectionPath|| 'text',obj);
    },
    renderInput() {
        var value;
        if ( this.state.selection ) {
            value = this._parseValue(this.state.selection);
        }

        return <input onKeyDown={this.onKeyUp} value={value} ref="acInput" onChange={this.acInputChange} placeholder={this.props.placeholder} type="text" autoComplete="off"
            style={ { height: "100%", width: "100%" ,position: "relative", left: "0px", tabindex: "tabindex"}}   />;

    },
    render : function() {
        const params = this.getInputParams();
        const style = assign({position: 'relative'},params.style);

        return (
            <div className="rui-form-cont">
                {this.getLabel()}
                <div style={style} ref="acCont" className={"rui-form-ac-cont rui-form-input " + params.className} onClick={this.containerClick}>
                    {this.renderInput()}
                    {this.renderToggle()}
                </div>
                {this.showResults()}
            </div>
        );
    }

});

module.exports = AutoComplete;
