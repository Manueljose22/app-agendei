import { SafeAreaView, FlatList, RefreshControl } from "react-native";
import { styles } from './bookings.style';
import { CardBooking } from '../../../../components/booking/CardBooking';
import { useCallback, useEffect, useState } from "react";
import { AppointmentServices } from "@/src/services/appointments/AppoitmentsService";
import { IAppointmentSave } from "@/src/services/appointments/types";




export default function Bookings() {

    const [appointments, setAppointments] = useState<IAppointmentSave[]>([]);
    const [refreshing, setIsRefreshing] = useState<boolean>(false);

    const loadBooking = useCallback(async () => {
        try {
            const appointments = await AppointmentServices.GetAll();
            setAppointments(appointments);
        } catch (error: any) {
            
        }
    }, []);

    useEffect(() => {
        loadBooking();
    }, [])


    const handleCancelAppointments = async (id: string) =>{
        setAppointments(appointments.filter(item => item.id !== appointments[0].id));

        try {
            await AppointmentServices.Cancel(id);
            setIsRefreshing(true)
        } catch (error: any) {
            
        } finally{
            setIsRefreshing(false)
        }
    }

    return (
        <SafeAreaView style={styles.container}>

            <FlatList
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={() =>handleCancelAppointments}/>}
                data={appointments}
                keyExtractor={(booking) => booking.id}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <CardBooking
                        idAppointment={item.id}
                        doctor={item.doctor}
                        service={item.service}
                        especialty={item.specialty}
                        bookingDate={item.booking_date}
                        bookingHour={item.booking_hour}
                        onPress={()=>handleCancelAppointments(item.id)}

                    />
                )}
            />



        </SafeAreaView>
    )
}
