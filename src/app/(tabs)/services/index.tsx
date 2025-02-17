import { Alert, FlatList, Image, SafeAreaView, Text, View } from "react-native";
import { styles } from './services.style';
import { Button } from "../../../components/button/Button";
import { male } from "../../../constants/Icons";
import { router, useLocalSearchParams } from "expo-router";
import { doctorProps } from "../../../components/doctor/CardDoctor";
import { useCallback, useEffect, useState } from "react";
import { IDoctorsService } from "../../../services/doctors/types";
import { DoctorsServices } from "@/src/services/doctors/DoctorsServices";




export default function Services() {

    const [doctors_services, setDoctors_services] = useState<IDoctorsService[]>([]);

    const { data } = useLocalSearchParams<{ data: string }>();
    const doct: doctorProps = data ? JSON.parse(data) : null;

    const handleSchedule = (idService: string) => {
        router.navigate({
            pathname: "/schedule",
            params: { idService, doctorId: doct.doctorId }
        });
    }


    const loadServices = useCallback(async () => {
        const services = await DoctorsServices.getDoctorService(doct.doctorId);
        setDoctors_services(services);
    }, []);

    useEffect(() => {
        loadServices();
    }, [])


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.banner}>
                <Image source={male} />
                <Text style={styles.title}>{doct.name}</Text>
                <Text style={styles.especialty}>{doct.especialty}</Text>
            </View>
            <View>
                <FlatList
                    data={doctors_services}
                    keyExtractor={(doc) => doc.idService}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <View style={styles.content}>
                            <View>
                                <Text style={styles.description}>{item.description}</Text>
                                <Text style={styles.price}>
                                    {
                                        new Intl.NumberFormat('pt-AO', { style: 'currency', currency: 'AOA' }).format(item.price)
                                    }
                                </Text>
                            </View>
                            <View>
                                <Button onPress={() => handleSchedule(item.idService)} text={"Agendar"} />
                            </View>
                        </View>
                    )}
                />
            </View>
        </SafeAreaView>
    )
}