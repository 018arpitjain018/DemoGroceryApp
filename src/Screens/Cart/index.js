import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import { Text } from '../../Components';

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>My Cart</Text>
            </View>
        );
    }
}

export default index;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})