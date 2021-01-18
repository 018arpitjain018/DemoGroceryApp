import { StyleSheet } from 'react-native';
import Colors from '../../../Common/Colors';

export default StyleSheet.create({
    searchBar: {
        flexDirection: 'row',
        width: '100%',
        backgroundColor: Colors.lightGray,
        alignItems: 'center',
        minHeight: 60,
        borderRadius: 20,
        marginVertical: 10,
        paddingHorizontal: 20
    },
    searchInput: {
        backgroundColor: Colors.lightGray,
        marginHorizontal: 10,
        width: '90%',
        fontSize: 22,
        fontWeight: '500'
    }
})
