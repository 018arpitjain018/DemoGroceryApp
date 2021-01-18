import React, { Component } from 'react';
import { View, ScrollView, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';

import { Text, Header, TextInput, Avatar, Notice } from '../../Components';
import HeaderText from '../../Components/Core/Text/HeaderText';
import Colors from '../../Common/Colors';
import Images from '../../Common/Images';

import Data from '../../Common/Data';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            search: null
        };
    }
    render() {
        const { search } = this.state;

        return (
            <ScrollView style={styles.container}>
                <Header />

                <View style={{ marginVertical: 10 }}>
                    <Text>Find your daily goods</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TextInput icon={Images.search} placeholder="Search here.." value={search} onChangeText={(text) => this.setState({ search: text })} style={{ width: '83%' }} />
                        <TouchableOpacity style={styles.options}>
                            <Image source={Images.filter} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ marginVertical: 10 }}>
                    <Notice />
                </View>

                <View style={{ marginVertical: 10 }}>
                    <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', marginVertical: 10 }}>
                        <HeaderText>Promotions</HeaderText>
                        <Text style={{ color: Colors.black }}>See all</Text>
                    </View>
                    <FlatList 
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={Data.Promotions}
                        renderItem={({ item, index }) => <Image key={index} source={item.banner} style={{ marginEnd: 20 }} />}
                        keyExtractor={item => item.id + ''}
                        contentContainerStyle={{ justifyContent: 'flex-start', maxHeight: 300 }}
                    />
                </View>

                <View style={styles.sections}>
                    { Data.Options.map((item, index) => <View key={item.id} style={{ margin: 20 }}>
                            <Avatar source={item.image} label={item.label} />
                        </View>) }
                </View>

            </ScrollView>
        );
    }
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: Colors.white
    },
    options: { 
        height: 60,
        width: 60,
        borderRadius: 20,
        marginHorizontal: 10,
        backgroundColor: Colors.yellow,
        alignItems: 'center',
        justifyContent: 'center'
    },
    sections: { 
        flexDirection: 'row', 
        flexWrap: 'wrap', 
        marginVertical: 10, 
        justifyContent: 'center' 
    }
})