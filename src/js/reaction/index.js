/* global module,require */
/* jshint esnext: true, -W097 */

import React from 'react';

var htmlElement;

const DEFAULT_PATH_KEY = "";
const routesMap = {};

const getHashPath = function(url) {
    var indexOfHash = url.indexOf("#") +1;
    return url.substring(indexOfHash);
};

const createUrlPath = function(routePath) {


    var pathArr = routePath.split("/").filter( path => {  return path !== "";  }).map( path => { return path; } );

    return {

        matches: function(urlPath) {
            var tmpUrlPath = createUrlPath(urlPath);

            for ( var i=0; i < tmpUrlPath.pathArr.length; i++  ) {

                if ( pathArr[i] !== tmpUrlPath.pathArr[i] ) {
                    return false;
                }
            }

            return true;

        },

        get pathArr() {
            return pathArr;
        }

    };

};
const createRoute = function(routePath,routeHandler,parentRoute) {

    var defaultHandler;
    var urlPath = createUrlPath(routePath);

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
        },

        get urlPath() {
            return urlPath;
        }

    };

};


const api = {};

/**
 *
 */
const reactionRoute = function(routePath, routeHandler) {

    if ( !routesMap[routePath] ) {
        routesMap[routePath] = createRoute(routePath,routeHandler);
    }

    return routesMap[routePath];

};

const defaultRoute = function(handler) {
    routesMap[DEFAULT_PATH_KEY] = createRoute(DEFAULT_PATH_KEY,handler);
    return api;
};

const renderRouteHandler = function(route) {
    if ( route ) {
        React.render(route.handler,htmlElement);
    }
};

const findMatchingRoute = function(hashUrl) {

    var route;
    Object.keys( routesMap ).forEach ( key => {

        let currentRoute = routesMap[key];
        if ( currentRoute.urlPath.matches( hashUrl ) ) {
            route = routesMap[key];
        }


    });
    return route;
};

const dispatchRoute = function() {

    const urlPath = location.href;


    if ( urlPath.indexOf('#') !== -1 ) {
        renderRouteHandler(findMatchingRoute(getHashPath(urlPath)));
    } else {
        renderRouteHandler(routesMap[DEFAULT_PATH_KEY]);
    }

};



const run = function(htmlEl) {

    var currentUrl = window.location.href;
    var path;

    htmlElement = htmlEl;

    window.addEventListener("popstate", dispatchRoute);

    dispatchRoute();
};



Object.defineProperty(api, "default", {writeable:false,enumerable: true, configurable: false, value: defaultRoute});
Object.defineProperty(api, "route", {writeable:false,enumerable: true, configurable: false, value: reactionRoute});
Object.defineProperty(api, "run", {writeable:false,enumerable: true, configurable: false, value: run});

module.exports = api;
