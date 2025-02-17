import { StyleSheet } from 'react-native';
import { Colors, Font_Size } from '../../constants/Colors';



export const styles = StyleSheet.create({
    container:{
        marginVertical: 10
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.gray4,
        borderRadius: 4,
        padding: 10
    },
    containerText: {
        marginLeft: 4
    }
    ,
    name: {
        fontSize: Font_Size.md,
        color: Colors.gray1,
        fontWeight: '600'
    },
    especialty: {
        fontSize: Font_Size.md,
        color: Colors.gray2
    },
    img: {
        resizeMode: 'cover',
        width: 50,
        height: 50
    }
})