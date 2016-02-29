import React from 'react';
import React from 'react-dom';
import LabelDispatcher from '../dispatcher/LabelDispatcher';

class NewItemForm extends React.Component {

    updateLabel(e) {

        // so we don't reload the page
        e.preventDefault();

        // this gets the value from the input
        let item_label = React.findDOMNode(this.refs.item_label).value.trim();

        // this removes the value from the input
        React.findDOMNode(this.refs.item_label).value = '';

        // This is where the magic happens
        LabelDispatcher.dispatch({
            action: 'add-label',
            new_item: {
                name: item_label
            }
        });

    }

    render() {

        return <div className="new-item-form">
            <form onSubmit={ this.updateLabel.bind(this) }>
                <input type="text" ref="item_label"/>
                <button>Update label</button>
            </form>
        </div>
    }
}

export default NewItemForm;
