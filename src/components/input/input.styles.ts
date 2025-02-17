import { Colors, Font_Size } from "../../constants/Colors";
import { StyleSheet } from "react-native";





export const styles = StyleSheet.create({
    input:{
        backgroundColor: Colors.gray5,
        padding: 6,
        borderRadius: 5,
        width: '100%',
        marginBottom: 3
    },
    container:{
        marginBottom: 16
    },
    textError:{
        color: 'red',
        marginTop: 4,
        fontSize: Font_Size.sm
    }
})