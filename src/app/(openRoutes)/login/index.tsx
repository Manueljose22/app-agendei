import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './login.styles';
import { Header } from '../../../components/layout/Header';
import { Input } from '../../../components/input/Input';
import { Button } from '../../../components/button/Button';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Link } from 'expo-router';
import { authContext } from '../../../contexts/auth/auth';
import { useContext } from 'react';







const schema = z.object({
    email: z.string().min(1, { message: 'Informe o email.' }),
    password: z.string().min(4, { message: 'Informe a senha.' })
})

type formData = z.infer<typeof schema>




export default function Login() {

    const { control, handleSubmit, formState: { errors, isValid } } = useForm<formData>({
        resolver: zodResolver(schema)
    })

    const { Login } = useContext(authContext);


    const handleAccess = (data: formData) => {
        Login(data);
    }

    return (
        <SafeAreaView style={styles.container}>

            <Header />

            <View >
                <Input
                    name={'email'}
                    placeholder={'Digite seu email'}
                    control={control}
                    error={errors.email?.message}
                    KeyboardType='email-address'
                />

                <Input
                    name={'password'}
                    placeholder={'Digite sua senha'}
                    control={control}
                    error={errors.email?.message}
                    KeyboardType='default'
                    secureTextEntry={true}

                />

                <Button text='Acessar' onPress={handleSubmit(handleAccess)} />
            </View>

            <View style={styles.footer} >
                <Text style={styles.text}>Não tenho conta.</Text>

                <Link href={"/(openRoutes)/account"} asChild>
                    <TouchableOpacity>
                        <Text style={styles.span}>Criar conta</Text>
                    </TouchableOpacity>
                </Link>
            </View>
        </SafeAreaView>
    )
}
