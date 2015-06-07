/* global module,require */
/* jshint esnext: true, -W097 */

import React from 'react';
const {Children} = React;



const routesMap = {
};

const getPath = function(url) {
    var indexOfHash = url.indexOf("#") +1;
    return url.substring(indexOfHash);
};


const createRoute = function(routePath,routeHandler,parentRoute) {

    var defaultHandler;

    return {

        default(defHandler) {
            defaultHandler = defHandler;
            return this;
        },

        route(routePath,routeHandler) {
            return createRoute(routePath,routeHandler,this);
        },

        get parent() {
            return parentRoute;
        },

        get handler() {
            return routeHandler ? routeHandler : defaultHandler;
        }

    };

};

/**
 *
 */
const reactionRoute = function(routePath, routeHandler) {

    if ( !routesMap[routePath] ) {
        routesMap[routePath] = createRoute(routePath,routeHandler);
    }

    return routesMap[routePath];

};

const routeDispatcher = function(htmlElement,e) {

    const oldURL = getPath(e.oldURL);
    const newURL = getPath(e.newURL);

    var route = routesMap[newURL];
    console.log(route);
    React.render(route.handler,htmlElement);

};

const run = function(htmlElement) {
    window.addEventListener("hashchange", routeDispatcher.bind(null,htmlElement), false);
};

const api = {};

Object.defineProperty(api, "route", {writeable:false,enumerable: true, configurable: false, value: reactionRoute});
Object.defineProperty(api, "run", {writeable:false,enumerable: true, configurable: false, value: run});

module.exports = api;
