import {Dispatcher} from 'flux';
let LabelDispatcher = new Dispatcher();

import LabelStore from '../stores/LabelStore';

// Register callback with LabelDispatcher
LabelDispatcher.register((payload) => {

    let action = payload.action;
    let new_item = payload.new_item;

    switch(action) {

        // Respond to add-label action
        case 'add-label':
            LabelStore.addLabel(new_item);
            break;

        //TODO: to add additional cases

        default:
            return true;
    }

    // If action was responded to, emit change event
    LabelStore.emitChange();

    return true;
});

export default LabelDispatcher;
