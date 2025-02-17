import { StyleSheet } from "react-native";
import {Colors, Font_Size} from '../../../../constants/Colors';




export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: Colors.white,
    },
    content:{
        borderBottomWidth: 1,
        borderColor: Colors.gray4,
        paddingHorizontal: 20,
        paddingVertical: 10

    },
    label:{
        fontSize: Font_Size.sm,
        color: Colors.gray3
    },
    text:{
        fontSize: Font_Size.md,
        color: Colors.gray1
    },
    btn:{
        flexDirection: 'row',
        gap: 5
    }
})