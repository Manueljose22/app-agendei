import {View, Text, Pressable} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import {Colors} from '../../constants/Colors';
import { styles } from './cardBooking.styles';
import { Button } from '../button/Button';



type CardBookingProps = {
    idAppointment: string;
    doctor: string;
    service: string;
    especialty: string;
    bookingDate: string;
    bookingHour: string;
    onPress: (id:string) => void;
}



export const CardBooking = ({idAppointment,doctor, service,especialty, bookingDate, bookingHour, onPress}: CardBookingProps) => {
  
    const date = new Date(bookingDate.slice(0, 10)).toLocaleDateString();

    return (
    <View style={styles.container}>
       
        <View style={styles.mainText}>
            <Text style={styles.title}>{service} - {doctor}</Text>
            <Text style={styles.especialty}>{especialty}</Text>
        </View>
        
        <View style={styles.containerBooking}>
            <View >
                <View style={styles.content}>
                    <FontAwesome name='calendar' size={25} color={Colors.blue} /> 
                    <Text style={styles.booking}>{date}</Text> 
                </View>
                <View style={styles.content}>
                    <FontAwesome name='clock-o' size={25} color={Colors.blue} /> 
                    <Text style={styles.booking}>{bookingHour}</Text> 
                </View>
            </View>
            <View>
                <Button text='Cancelar' theme='danger' onPress={()=> onPress(idAppointment)}/>
            </View>
        </View>

    </View>
  )
}
