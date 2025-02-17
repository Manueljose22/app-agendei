import { Colors, Font_Size } from "../../constants/Colors";
import { StyleSheet } from "react-native";





export const styles = StyleSheet.create({
    btn:{
        width: '100%',
        fontSize: Font_Size.md,
        padding: 10,
        borderRadius: 5,
    },
    primary:{
        backgroundColor: Colors.blue,
    },
    danger:{
        backgroundColor: Colors.red,
    },
    text:{
        textAlign: 'center',
        color: Colors.white,
        fontSize: Font_Size.md
    }
})