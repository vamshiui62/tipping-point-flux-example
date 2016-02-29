import {EventEmitter} from 'events';
import _ from 'lodash';

let LabelStore = _.extend({}, EventEmitter.prototype, {

    // default data
    label: '',

    // Get Label
    getLabel: function(){
        return this.label;
    },

    // Add Label
    addLabel: function(new_Label){
        this.label =  new_Label.name;
    },

    // Emit Change event
    emitChange: function(){
        this.emit('change');
    },

    // Add change listener
    addChangeListener: function(callback){
        this.on('change', callback);
    }

});

export default LabelStore;
