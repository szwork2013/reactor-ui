"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

/* global module,require */
/* jshint esnext: true, -W097 */

var React = _interopRequire(require("react"));

var Children = React.Children;

/**
 * Highly experimental Route api
 */
var Reaction = {};

var addRoute = function addRoute(map, route) {
    var path = route.props.path;
};

/**
 *
 */
Reaction.run = function (routes) {

    //create a map of routes
    var routeMap = {};
    Children.forEach(routes.props.children, function (route) {});

    //listen to the url
    window.on("hashchange", function () {
        console.log(window.location.hash);
    });

    var ReactionRoute = React.createClass({
        displayName: "ReactionRoute",

        render: function render() {}
    });
};

module.exports = Reaction;