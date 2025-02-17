import React from 'react'
import { Image, View, ImageSourcePropType, Text, TouchableOpacity} from 'react-native';
import { styles } from './CardDoctor.styles';



export type CardDoctorProps = {
    doctorId: string;
    name: string;
    especialty: string;
    icon: ImageSourcePropType;
    onPress: (data: doctorProps) => void;
}

export type doctorProps = {
    doctorId: string;
    name: string;
    especialty: string;
}



export const CardDoctor = ({doctorId, name, especialty, icon, onPress }: CardDoctorProps) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.content} onPress={()=>onPress({doctorId, especialty, name})}>
                <View>
                    <Image style={styles.img} source={icon} />
                </View>
                <View style={styles.containerText}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.especialty}>{especialty}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

