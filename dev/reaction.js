/*globals require,module,document */
/* jshint -W097, esnext: true */
'use strict';

import React from 'react';

import reaction from 'reactor-ui/reaction';




var UsersList = React.createClass({
    render() {
        return <div>Users List</div>;
    }
});

var EditUser = React.createClass({
    render() {
        return <div>Edit User</div>;
    }
});

var Reports = React.createClass({
    render() {
        return <div>Reports</div>;
    }
});


reaction.route("/users")
    .default(<UsersList/>)
    .route("/edit/{id}", <EditUser/> );

reaction.route("/reports", <Reports />);            


reaction.run(document.getElementById('cont1'));
