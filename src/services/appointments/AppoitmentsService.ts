import { Alert } from 'react-native';
import { Api } from '../../utils/Api';
import { IAppointmentSave, ICreateAppointments } from './types';






const Create = async (data: ICreateAppointments): Promise<void | Error> => {

    try {
        await Api.post<ICreateAppointments>("/appointments/register", data);
    } catch (error: any) {
        Alert.alert("Alerta!", error.response.data.message);
        throw new Error(error.response.data.message);
    }
}



const GetAll = async (): Promise<IAppointmentSave[]> => {

    try {
        const { data } = await Api.get<IAppointmentSave[]>("/appointments/all");
        return data

    } catch (error: any) {
        Alert.alert("Alerta", error.response.data.message);
        throw new Error(error.response.data.message);
    }
}

const Cancel = async (idAppointment: string): Promise<void> =>{
    try {
        await Api.delete(`/appointments/${idAppointment}`);

    } catch (error: any) {
        Alert.alert("Erro.", error.response.data.message);
        throw new Error(error.response.data.message);
    }
}



export const AppointmentServices ={
    Create,
    GetAll,
    Cancel
}