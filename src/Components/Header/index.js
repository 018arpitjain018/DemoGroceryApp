import React, { Component } from 'react';
import { Image, SafeAreaView, View } from 'react-native';

import Avatar from '../Core/Avatar';
import HeaderText from '../Core/Text/HeaderText';
import Images from '../../Common/Images';

import styles from './style';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <SafeAreaView>
                <View style={styles.header}>
                    <Avatar source={Images.user} size={50} />
                    <HeaderText>Welcome to 86</HeaderText>
                    <Image source={Images.notification} />
                </View>
            </SafeAreaView>
        );
    }
}

export default Header;