import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';







export const Api = axios.create({
    baseURL: "http://192.168.85.111:3000",
    // headers:{
    //     Authorization: `Bearer ${token}`
    //     // Authorization: `Bearer ${JSON.parse(token)}`
    // }
})

