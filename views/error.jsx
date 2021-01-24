import DefaultLayout from "./layout";
import React from 'react';

function ErrorMessage(props) {
    return (
        <DefaultLayout title={props.title}>
            <h3>Error</h3>
            <div>{props.message}</div>
            <div>{props.status}</div>
            <pre>{props.stack}</pre>
        </DefaultLayout>
    );
}

export default ErrorMessage