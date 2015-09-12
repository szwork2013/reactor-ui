"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var FormStyle = {
    containerStyle: {},
    labelStyle: {
        fontSize: "110%",
        marginBottom: 6

    },
    inputStyle: {
        height: 32,
        padding: "2px 8px",
        backgroundColor: "#fff",
        border: "1px solid #D1D1D1",
        borderRadius: 1,
        boxShadow: "none",
        boxSizing: "border-box",
        marginBottom: 6,
        width: "100%",
        position: "relative"
    },
    inputStyleInline: {
        display: "inline-block",
        width: "auto"
    },
    inputStyleBlock: {
        display: "block",
        width: "100%"
    },

    autocompleteInputStyle: {
        maxHeight: "none",
        minHeight: 0,
        padding: 0,
        margin: "0 1px",
        lineHeight: "inherit",
        textIndent: 0,
        background: "none",
        border: "0 none",
        boxShadow: "none",
        outline: "none !important"
    },
    autocompleteResultContainer: {
        border: "1px solid #D1D1D1",
        borderTop: "none",
        display: "block",
        position: "absolute",
        zIndex: 99999,
        background: "#FFF",
        color: "#000"
    }
};

exports["default"] = FormStyle;
module.exports = exports["default"];