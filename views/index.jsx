// var React = require('react');
// var DefaultLayout = require('./layout');
// require('../public/stylesheets/style.css');
import React from 'react';
import DefaultLayout from './layout';
import List from './list';

function HelloMessage(props) {
    return (
        <DefaultLayout title={'Name Application'}>
            <h3>Name Application</h3>
            <div>This is an interface to list some names an amounts.</div>
            <List list={props.nameList} />
        </DefaultLayout>
    );
}

export default HelloMessage