import { Text, TouchableOpacity } from "react-native"
import { styles } from "./button.styles";




interface buttonProps{
    theme?: string;
    text: string;
    onPress?: () => void
}


export const Button = ({theme, onPress, text}: buttonProps) => {
  return (
    <TouchableOpacity style={[styles.btn, theme === 'danger' ? styles.danger : styles.primary]} onPress={onPress}>
        <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

