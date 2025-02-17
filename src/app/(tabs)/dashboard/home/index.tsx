import { FlatList, SafeAreaView, Text, View, RefreshControl } from "react-native";
import { styles } from './home.style';
import { CardDoctor, doctorProps } from '../../../../components/doctor/CardDoctor';
import { male, female } from '../../../../constants/Icons';
import { useCallback, useEffect, useState } from "react";
import { router } from "expo-router";
import { IDoctorsSave } from "../../../../services/doctors/types";
import { DoctorsServices } from "../../../../services/doctors/DoctorsServices";



export default function Home(){

    const [isRefresh, setIsRefresh] = useState<boolean>(false)
    const [doctors, setDoctors] = useState<IDoctorsSave[]>([])

    const handleClick = (data: doctorProps) =>{
        router.navigate({
            pathname: "/(tabs)/services",
            params: {data: JSON.stringify(data)}
        })
    }

    const getAllDoctors = useCallback(async () =>{
        try {
            const doct = await DoctorsServices.getAll();
            setDoctors(doct);
            setIsRefresh(true)
        } catch (error: any) {
            
        } finally {
            setIsRefresh(false)
        }

    }, [])

    useEffect(()=>{
        getAllDoctors();
    },[])

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.title}>Agende os seus serviços médicos.</Text>
            </View>
            <View>
                <FlatList
                    refreshControl={<RefreshControl refreshing={isRefresh} onRefresh={getAllDoctors} />}
                    data={doctors}
                    keyExtractor={(doctor) => doctor.id}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <CardDoctor
                            doctorId={item.id}
                            icon={item.photo === 'M' ? female : male}
                            name={item.name}
                            especialty={item.especialty}
                            onPress={handleClick}
                        />
                    )}
                />
            </View>
        </SafeAreaView>
    );
}
