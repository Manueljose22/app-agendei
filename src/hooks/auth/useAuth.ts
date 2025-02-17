import { useState } from "react";
import { router } from "expo-router";
import { SessionServices } from "../../services/sessions/SessionsServices";
import { IPayloadSave, IRequestPayload } from "../../services/sessions/types";
import { UsersServices } from "../../services/users/UsersServices";
import { Api } from "../../utils/Api";





export const useAuth = () => {

    const [authenticated, setAuthenticated] = useState<boolean>(false);
    const [userId, setUserId] = useState<string>('');


    const Login = async (payload: Pick<IRequestPayload, 'email' | 'password'>) => {

        const data = await SessionServices.login(payload);
        authUser(data);
        setUserId(data.user.id);

    }


    const Register = async (payload: IRequestPayload) =>{
        const data = await UsersServices.Register(payload);
        authUser(data);
    }

    const authUser = (data: IPayloadSave) => {
        setAuthenticated(true);
        Api.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
        router.replace("/dashboard/home");
    }

    const Logout = async () => {
        setAuthenticated(false);
        Api.defaults.headers.common['Authorization'] = null;
        router.replace("/login");
    }





    return {
        authenticated,
        Login,
        Register,
        Logout,
        userId
    }

}