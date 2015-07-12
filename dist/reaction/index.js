/* jshint esnext: true, -W097,unused: vars */
/* global module  */

"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var htmlElement = undefined;

var DEFAULT_PATH_KEY = "";
var routesMap = {};

var getHashPath = function getHashPath(url) {
    var indexOfHash = url.indexOf("#") + 1;
    return url.substring(indexOfHash);
};

var createUrlPath = function createUrlPath(routePath) {

    var pathArr = routePath.split("/").filter(function (path) {
        return path !== "";
    }).map(function (path) {
        return path;
    });

    return Object.defineProperties({

        matches: function matches(urlPath) {

            var tmpUrlPath = createUrlPath(urlPath);

            for (var i = 0; i < tmpUrlPath.pathArr.length; i++) {}

            return true;
        }

    }, {
        pathArr: {
            get: function get() {
                return pathArr;
            },
            configurable: true,
            enumerable: true
        }
    });
};
var createRoute = function createRoute(routePath, routeHandler, parentRoute) {

    var defaultHandler;
    var urlPath = createUrlPath(routePath);

    return Object.defineProperties({

        "default": function _default(defHandler) {
            defaultHandler = defHandler;
            return this;
        },

        route: function route(routePath, routeHandler) {
            return createRoute(routePath, routeHandler, this);
        }

    }, {
        parent: {
            get: function get() {
                return parentRoute;
            },
            configurable: true,
            enumerable: true
        },
        handler: {
            get: function get() {
                return routeHandler ? routeHandler : defaultHandler;
            },
            configurable: true,
            enumerable: true
        },
        urlPath: {
            get: function get() {
                return urlPath;
            },
            configurable: true,
            enumerable: true
        }
    });
};

var api = {};

/**
 *
 */
var reactionRoute = function reactionRoute(routePath, routeHandler) {

    if (!routesMap[routePath]) {
        routesMap[routePath] = createRoute(routePath, routeHandler);
    }

    return routesMap[routePath];
};

var defaultRoute = function defaultRoute(handler) {
    routesMap[DEFAULT_PATH_KEY] = createRoute(DEFAULT_PATH_KEY, handler);
    return api;
};

var renderRouteHandler = function renderRouteHandler(route) {
    if (route) {
        _react2["default"].render(route.handler, htmlElement);
    }
};

var findMatchingRoute = function findMatchingRoute(hashUrl) {

    var route;
    Object.keys(routesMap).forEach(function (key) {

        var currentRoute = routesMap[key];
        if (currentRoute.urlPath.matches(hashUrl)) {
            route = routesMap[key];
        }
    });
    return route;
};

var dispatchRoute = function dispatchRoute() {

    var urlPath = location.href;

    if (urlPath.indexOf("#") !== -1) {
        renderRouteHandler(findMatchingRoute(getHashPath(urlPath)));
    } else {
        renderRouteHandler(routesMap[DEFAULT_PATH_KEY]);
    }
};

var run = function run(htmlEl) {

    htmlElement = htmlEl;

    window.addEventListener("popstate", dispatchRoute);

    dispatchRoute();
};

Object.defineProperty(api, "default", { writeable: false, enumerable: true, configurable: false, value: defaultRoute });
Object.defineProperty(api, "route", { writeable: false, enumerable: true, configurable: false, value: reactionRoute });
Object.defineProperty(api, "run", { writeable: false, enumerable: true, configurable: false, value: run });

module.exports = api;

/*
if ( pathArr[i] !== tmpUrlPath.pathArr[i] ) {
    return false;
}*/