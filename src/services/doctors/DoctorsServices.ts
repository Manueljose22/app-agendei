import { Alert } from "react-native";
import { Api } from "../../utils/Api";
import { IDoctorsSave, IDoctorsService } from "./types"
import AsyncStorage from "@react-native-async-storage/async-storage";





const getAll = async (): Promise<IDoctorsSave[]> => {

    try {

        const { data } = await Api.get<IDoctorsSave[]>("/doctors");

        return data;

    } catch (error: any) {
        Alert.alert(error.response.data.message);
        throw new Error(error.response.data.message);
    }
}


const getDoctorService = async (idDoctor: string): Promise<IDoctorsService[]> => {

    try {
        const { data } = await Api.get<IDoctorsService[]>(`/doctors/${idDoctor}/services`)

        return data;

    } catch (error: any) {
        Alert.alert(error.response.data.message);
        throw new Error(error.response.data.message);
    }
}



export const DoctorsServices = {
    getAll,
    getDoctorService

}
