import React, { Component } from 'react';
import { View, Image } from 'react-native';

import { Text } from '../Text';

class Avatar extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        const props = this.props;

        return (
            <View style={{ alignItems: 'center' }}>
                <Image source={props.source} style={{
                    width: props.size,
                    height: props.size,
                    borderRadius: props.size
                }} />
                { props.label && <Text style={{ marginVertical: 10 }}>{props.label}</Text> }
            </View>
        );
    }
}

Avatar.defaultProps = {
    source: { uri: null },
    size: 70,
    label: null
}

export default Avatar;