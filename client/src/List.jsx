import React, {Component} from 'react';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {items: props.list};
        console.log("lista tuntee jutut" + JSON.stringify(props));
    }

    componentWillReceiveProps(nextProps) {
        this.setState({items: nextProps.list});
    }

    render() {
        var listItems = this.state.items.map((item, index) =>
        <li key={index}>
            Name: {item.name} amount: {item.amount}
        </li>
        );
        if (listItems.length === 0 ) {
            listItems = "Unfortunately the name list is empty!";
        };
        return(
            <ul>{listItems}</ul>
        );
    }
}

export default List