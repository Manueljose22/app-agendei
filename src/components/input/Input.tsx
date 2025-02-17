import { KeyboardTypeOptions, Text, TextInput, View } from "react-native"
import { Controller } from 'react-hook-form';
import { styles } from "./input.styles"


type InputProps = {
    name: string;
    control: any;
    placeholder?: string;
    rules?: object;
    error?: string;
    KeyboardType: KeyboardTypeOptions;
    secureTextEntry?: boolean;
}



export const Input = ({ placeholder, KeyboardType, control, name, error, rules, secureTextEntry }: InputProps) => {
    return (
        <View style={styles.container} >
            <Controller
                control={control}
                name={name}
                rules={rules}

                render={({field: {onBlur, onChange, value}})=>(
                    <TextInput 
                        style={styles.input}
                        placeholder={placeholder}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        keyboardType={KeyboardType}
                        secureTextEntry={secureTextEntry}
                    />
                )}

            />
            {error && <Text style={styles.textError}>{error}</Text>}
    </View>
    )
}
