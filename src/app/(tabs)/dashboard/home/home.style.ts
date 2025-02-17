import { StyleSheet } from "react-native";
import {Colors, Font_Size} from '../../../../constants/Colors';




export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: Colors.white,
        paddingHorizontal: 20,
        marginBottom: 30,
    },
    title:{
        fontSize: Font_Size.md,
        textAlign: 'center',
        marginBottom: 8
    }
})