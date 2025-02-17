import { Pressable, SafeAreaView, Text, View } from "react-native";
import { styles } from './profiles.styles'
import { useCallback, useContext, useEffect, useState } from "react";
import { UsersServices } from "@/src/services/users/UsersServices";
import { IUserProfile } from "@/src/services/users/types";
import { authContext } from "@/src/contexts/auth/auth";
import {Feather} from '@expo/vector-icons'





export default function Profile() {
    const [user, setUser] = useState<IUserProfile>();
    const {Logout} = useContext(authContext);

    const loadUser = useCallback(async () => {
        const data = await UsersServices.Profile();
        setUser(data);
    }, [])

    useEffect(() => {
        loadUser();
    }, [])


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.label}>Nome</Text>
                <Text style={styles.text}>{user?.name}</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.label}>Email</Text>
                <Text style={styles.text}>{user?.email}</Text>
            </View>
            <View style={styles.content}>
                <Pressable onPress={Logout} style={styles.btn} >
                    <Feather name="log-out" size={20}/>
                    <Text style={styles.text} >Sair</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}
