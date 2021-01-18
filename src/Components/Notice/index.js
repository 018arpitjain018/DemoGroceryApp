import React, { Component } from 'react';
import { View } from 'react-native';

import { Text, HeaderText } from '../Core/Text';
import Avatar from '../Core/Avatar';

import Images from '../../Common/Images';
import styles from './style';

class Notice extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <View style={styles.notice}>
                <Avatar source={Images.icon01} size={30} />
                <View style={{ marginHorizontal: 20, width: '70%' }}>
                    <HeaderText style={{ fontSize: 20, fontWeight: '500' }}>Complete Your Profile</HeaderText>
                    <Text>Labore Lorem deserunt enim deserunt.</Text>
                </View>
                <Avatar source={Images.icon02} size={20} />
            </View>
        )
    }

}

export default Notice;