import { Colors, Font_Size } from "../../constants/Colors";
import { StyleSheet } from "react-native";





export const styles = StyleSheet.create({
    container:{
        // borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: Colors.gray4,
        paddingVertical:8,
        paddingHorizontal: 20
    },
    mainText:{
        marginBottom: 15
    },
    title:{
       color: Colors.gray1,
       fontSize: Font_Size.lg,
       fontWeight: '600'
    },
    especialty:{
        fontSize: Font_Size.md,
        color: Colors.gray3
    },
    containerBooking:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    content:{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    booking:{
        marginLeft: 8,
        fontSize: Font_Size.md,
        color: Colors.gray3,
        fontWeight: '600'
    },
    btn:{
        backgroundColor: Colors.red,
        width: '100%',
        borderRadius: 10,
        padding: 8
    },
    textBtn:{
        color: Colors.white,
        fontSize: Font_Size.md,
        textAlign: 'center'
    }
})