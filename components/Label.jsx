import React from 'react';
import classNames from 'classnames';

class Label extends React.Component {

    propTypes: {
        text: React.PropTypes.string
    }

    render() {
        return(
           <div className={this.getClassName()}>{this.props.text}</div>
        );
    }

    getClassName() {
        return classNames({
            'label': true,
            'label_red': (this.props.text !== 'Tipping Point')
        });
    }
}

export default Label;