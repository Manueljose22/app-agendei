import { Redirect } from "expo-router";
import { useContext } from "react";
import { authContext, AuthProvider } from "../contexts/auth/auth";




export default function Index() {

  const { authenticated } = useContext(authContext);
  
  return (
    

        authenticated ? <Redirect href={"/dashboard/home"} /> :
                        <Redirect href={"/(openRoutes)/login"} />
    
  );
}
