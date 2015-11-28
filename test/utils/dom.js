const jsdom = require('jsdom');

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');

var win = doc.defaultView;

global.document = doc;
global.window = win;
global.navigator = win.navigator;

// Object.keys(win).forEach( key => {
//     if ( key !== 'console' ) {
//         global[key] = win[key];
//     }
// });
