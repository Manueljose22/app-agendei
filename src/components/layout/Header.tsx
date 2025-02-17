import { View, Image, StyleSheet } from 'react-native';
import { logo } from '../../constants/Icons'




export const Header = () => {
    return (
        <View style={styles.containerLogo}>
            <Image style={styles.logo} source={logo} />
        </View>
    )
}



export const styles = StyleSheet.create({
    containerLogo: {
        alignItems: 'center',
        marginBottom: 5,
    
    },
    logo: {
        width: 100,
        height: 23
    },
})