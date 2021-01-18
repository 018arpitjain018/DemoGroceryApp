import React, { Component } from 'react';
import { Text as RNText } from 'react-native';

import styles from './style';

class Text extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        const props = this.props

        return (
            <RNText style={[styles.text, props.style]}>{props.children}</RNText>
        );
    }
}

Text.defaultProps = {
    style: {}
}

export default Text;
