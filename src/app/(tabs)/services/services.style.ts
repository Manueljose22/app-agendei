import { StyleSheet } from "react-native";
import {Colors, Font_Size} from '../../../constants/Colors';




export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: Colors.white,
        // paddingVertical: 30,
    },
    banner:{
        backgroundColor: Colors.blue,
        height: '30%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    title:{
        fontSize: Font_Size.md,
        color: Colors.white,
        fontWeight: '800',
        marginTop: 5
    },
    especialty:{
        fontSize: Font_Size.sm,
        color: Colors.white,
    },
    content:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: Colors.gray4,
        paddingHorizontal: 20,
        paddingVertical: 12,
        alignItems: 'center'
        
    },
    description:{
        color: Colors.gray2,
        fontSize: Font_Size.md
    },
    price:{
        color: Colors.blue,
        fontSize: Font_Size.sm
    }
})