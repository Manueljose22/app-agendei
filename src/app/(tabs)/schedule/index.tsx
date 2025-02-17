import { Alert, SafeAreaView, Text, View } from 'react-native';
import React, {  useState } from 'react';
import { Calendar, LocaleConfig, CalendarProps } from 'react-native-calendars';
import { PT } from '../../../constants/calendar';
import { styles } from './schedule.style';
import { Picker } from '@react-native-picker/picker';
import { Button } from '../../../components/button/Button';
import { router, useLocalSearchParams } from 'expo-router';
import { AppointmentServices } from '@/src/services/appointments/AppoitmentsService';
import { authContext } from '@/src/contexts/auth/auth';

// LocaleConfig.locales['pt-Br'] = PT;
// LocaleConfig.defaultLocale = 'br';


export default function Schedule() {

  const [seletedDate, setSeletedDate] = useState<string>(new Date().toDateString().slice(0, 10))
  const [seletedHour, setSeletedHour] = useState<string>('')

  const { idService, doctorId } = useLocalSearchParams<{ idService: string, doctorId: string }>();
  


  const handleBooking = async () => {

    try {
      await AppointmentServices.Create({
        doctorId,
        serviceId: idService,
        bookingHour: seletedHour,
        bookingDate: seletedDate
      })

      router.replace("/dashboard/home");

    } catch (error: any) {
      Alert.alert("Agendamento", error.response.data.message);
    } 

   


  }



  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Calendar
          theme={styles.theme}
          minDate={new Date().toDateString()}
          onDayPress={(day: any) => {
            setSeletedDate(day.dateString)
          }}
          markedDates={{
            [seletedDate]: { seleted: true }
          }}
        />
        <View>
          <Text style={styles.title}>Horário</Text>
        </View>
        <View>
          <Picker selectedValue={seletedHour} onValueChange={(itemValue, itemIdex) => {
            setSeletedHour(itemValue);
          }} >
            <Picker.Item label='11:30' value={'11:30'} />
            <Picker.Item label='12:00' value={'12:00'} />
            <Picker.Item label='13:30' value={'13:30'} />
          </Picker>
        </View>
      </View>

      <View style={styles.btnContainer}>
        <Button text='Confirmar reserva' onPress={handleBooking} />
      </View>
    </SafeAreaView>
  )
}
