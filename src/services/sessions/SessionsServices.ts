import { Alert } from "react-native";
import { Api } from "../../utils/Api";
import { IPayloadSave, IRequestPayload } from "./types";




const login = async (payload: Pick<IRequestPayload, 'email' | 'password'>): Promise<IPayloadSave> => {

    try {
        const { data } = await Api.post<IPayloadSave>('/session/login', payload);
        
        return data;
    } catch (error: any) {
        Alert.alert("Erro de Login", error.response.data.message )
        throw new Error(error.response.data.message)
    }

}


export const SessionServices = {
    login,
}