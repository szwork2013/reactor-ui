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

var Index = React.createClass({
    render() {
        return <div>
            <ul>
                <li><a href="#users">Users</a></li>
                <li><a href="#reports">Reports</a></li>
            </ul>

        </div>;
    }
});


reaction.default(<Index/>);

reaction.route("/users",<UsersList/>)
    .route("/edit/{id}", <EditUser/> );

reaction.route("/reports", <Reports />);


reaction.run(document.getElementById('cont1'));
