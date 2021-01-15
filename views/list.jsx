import React from 'react';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: props.list }
        console.log(props);
    }

    render() {
        var listItems = this.state.items.map((item) =>
            <li key={item.toString()}>
                Name: {item.name} amout: {item.amount}
            </li>
        );
        if (listItems.length == 0) {
            listItems = "Unfotunately the name list is empty!";
        }
        return (
            <ul> { listItems}</ul>
        );
    }
}

export default List