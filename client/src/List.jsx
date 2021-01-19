import React, {Component} from 'react';
import './List.css';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {items: props.list, order: props.order};
        console.log("lista tuntee jutut" + JSON.stringify(props));
    }

    componentWillReceiveProps(nextProps) {
        this.setState({items: nextProps.list, order: nextProps.order});
    }

    render() {
      // myArray.map((val, index, array) => array[array.length - 1 - index]);
      var listItems;
      if (!this.state.order) {
        var reversedItems = this.state.items.map(item => item).reverse();
        listItems = reversedItems.map((item, index) =>
        <li key={index}>
          Name: {item.name} amount: {item.amount}
        </li>
        );
      }
      else {
        listItems = this.state.items.map((item, index) =>
        <li key={index}>
            Name: {item.name} amount: {item.amount}
        </li>
        );
      }
        
        if (listItems.length === 0 ) {
            listItems = "Unfortunately the name list is empty!";
        };
        return(
            <ul>{listItems}</ul>
        );
    }
}

export default List