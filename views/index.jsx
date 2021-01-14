var React = require('react');
var DefaultLayout = require('./layout');

function HelloMessage(props) {
    return (
        <DefaultLayout title={props.title}>
            <div>Hello {props.name}</div>
        </DefaultLayout>
    );
}

module.exports = HelloMessage;