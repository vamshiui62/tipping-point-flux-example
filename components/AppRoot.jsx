import React from 'react';
import LabelDispatcher from '../dispatcher/LabelDispatcher';
import LabelStore from '../stores/LabelStore';

// Sub components
import Label from './Label';
import NewItemForm from './NewItemForm';

// Method to retrieve state from Stores
let getLabelState = () => {
    return {
        label: LabelStore.getLabel()
    };
}

class AppRoot extends React.Component {

    // Method to setState based upon Store changes
    _onChange() {
        this.setState(getLabelState());

        //After 3 seconds, the label should smoothly return to its original size and color.
        setTimeout(
            () => {
                this.setState({label: ''})
            },
            1800
        );
    }

    constructor() {
        super();
        this.state = getLabelState();
    }

    // Add change listeners to stores
    componentDidMount() {
        LabelStore.addChangeListener(this._onChange.bind(this));
    }

    render() {
        return (
            <div>
                <Label text={this.getLabelText()}/>
                <NewItemForm />
            </div>
        );
    }

    getLabelText() {
        return this.state.label || 'Tipping Point';
    }
}

export default AppRoot;
