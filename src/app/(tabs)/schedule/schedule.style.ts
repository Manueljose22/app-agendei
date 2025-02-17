import { StyleSheet } from "react-native";
import {Colors, Font_Size} from '../../../constants/Colors';




export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: Colors.white,
        // paddingVertical: 30,
        paddingHorizontal: 12,
        justifyContent: 'space-between',
        marginBottom: 20
    },
    title:{
        fontSize: Font_Size.md,
        color: Colors.gray2,
        fontWeight: 'bold',
        marginTop: 20
    },
    btnContainer:{
        marginTop: 20
    },
    theme:{
        todayTextColor: Colors.red,
        selectedDayBackgroundColor: Colors.blue,
        selectedDayTextColor: Colors.white,
        arrownColor: Colors.blue
    },
})