import React, { Component } from 'react';
import Text from './Text';

import styles from './style';

class HeaderText extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const props = this.props

        return (
            <Text style={[ styles.headerText, props.style ]}>{props.children}</Text>
        );
    }
}

HeaderText.defaultProps = {
    style: {}
}

export default HeaderText;
