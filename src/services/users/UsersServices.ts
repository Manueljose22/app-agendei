import { Alert } from 'react-native';
import { Api } from '../../utils/Api';
import { IPayloadSave, IRequestPayload } from '../sessions/types';
import { IUserProfile } from './types';




const Register = async (payload: IRequestPayload): Promise<IPayloadSave> => {

    try {
        const { data } = await Api.post<IPayloadSave>("/users/register", payload);
        return data;

    } catch (error: any) {
        Alert.alert("Erro", error.response.data.message )
        throw new Error(error.response.data.message);
    }
}



const Profile = async (): Promise<IUserProfile> =>{

    try {
        const {data} = await Api.get<IUserProfile>("/users/profile");
        return data
    } catch (error: any) {
        Alert.alert("Erro", error.response.data.message )
        throw new Error(error.response.data.message);
    }

}

export const UsersServices = {
    Register,
    Profile
}