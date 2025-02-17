import { Colors } from '../../../constants/Colors';
import { StyleSheet } from 'react-native';



export const styles = StyleSheet.create({
    container:{
        backgroundColor: Colors.white,
        flex: 1,
        paddingVertical: 50,
        paddingHorizontal: 30,
        justifyContent: 'space-between',
    },
    footer:{
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        textAlign: 'center'
    },
    text:{
        color: Colors.gray3,
       
    },
    span:{
        color: Colors.blue,
        marginLeft: 4
    }
})