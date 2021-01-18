import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import { Text } from '../../Components';

class Orders extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Orders</Text>
            </View>
        );
    }
}

export default Orders;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})