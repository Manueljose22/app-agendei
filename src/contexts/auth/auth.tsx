import { IPayloadSave, IRequestPayload } from "../../services/sessions/types";
import { useAuth } from "../../hooks/auth/useAuth";
import { createContext, ReactNode } from "react";




export interface IAuthProps {
    Login: (paylaod: Pick<IRequestPayload, 'email' | 'password'>) => void;
    Register: (paylaod: IRequestPayload) => void;
    Logout: () => void;
    userId: string;
    authenticated: boolean
}

type props = {
    children: ReactNode;
}



export const authContext = createContext<IAuthProps>({} as IAuthProps);


export const AuthProvider = ({ children }: props) => {

    const { Login, Register, Logout, authenticated, userId } = useAuth();

    return (
        <authContext.Provider value={{ Login, Register, Logout, authenticated, userId }}>
            {children}
        </authContext.Provider>
    )
}