/* global module,require */
/* jshint esnext: true, -W097 */

import React from 'react';
var {Children} = React;


/**
 * Highly experimental Route api
 */
var Reaction = {};

var addRoute = function(map,route) {
    var path = route.props.path;
};

/**
 *
 */
Reaction.run = function(routes) {


    //create a map of routes
    var routeMap = {};
    Children.forEach(routes.props.children, (route) => {

    });

    //listen to the url
    window.on("hashchange", () => {
        console.log(window.location.hash);
    });

    var ReactionRoute = React.createClass({
        render() {

        }
    });

};

module.exports = Reaction;
