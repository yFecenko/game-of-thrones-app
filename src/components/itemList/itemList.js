import React, {Component} from 'react';
import Spinner from '../spinner';
import './itemList.css';

export default class ItemList extends Component {

    state = {
        charList : null
    }

    componentDidMount () {
        const {getData} = this.props;

        getData()
            .then((itemList) => {
                this.setState({
                    itemList
                })
            })
    }

    renderItems(arr) {
        return arr.map((item, i) => {
            return (
                <li 
                    key={i}
                    className="list-group-item"
                    onClick={ () => {this.props.onCharSelected(41 + i)}}
                    >
                    {item.name}
                </li>
            )
        })
    }

    render() {

        const {itemList} = this.state;

        if (!itemList) {
            return <Spinner/>
        }

        const items = this.renderItems(itemList);

        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}