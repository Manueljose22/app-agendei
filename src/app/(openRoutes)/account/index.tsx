import { SafeAreaView, Text, View, TouchableOpacity } from 'react-native';
import { styles } from './account.style';
import { Header } from '../../../components/layout/Header';
import { Button } from '../../../components/button/Button';
import { Input } from '../../../components/input/Input';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Link } from 'expo-router';
import { useContext } from 'react';
import { authContext } from '../../../contexts/auth/auth';




const schema = z.object({
    name: z.string().min(1, 'Informe seu nome completo.'),
    email: z.string().min(1, 'Informe seu email.'),
    password: z.string().min(1, 'Crie uma senha.'),
});

type formData = z.infer<typeof schema>;


export default function Account() {

    const { Register } = useContext(authContext);

    const { control, handleSubmit, formState: { errors } } = useForm<formData>({
        resolver: zodResolver(schema)
    })


    const handleRegister = async (data: formData) => {

        try {
            Register(data);
        } catch (error: any) {
            throw new Error(error.response.data.message)
        }

    }

    return (
        <SafeAreaView style={styles.container}>
            <Header />

            <View>
                <Input
                    name='name'
                    placeholder='Digite seu nome completo'
                    control={control}
                    KeyboardType='default'
                    error={errors.name?.message}
                />
                <Input
                    name='email'
                    placeholder='Digite seu email'
                    control={control}
                    KeyboardType='email-address'
                    error={errors.email?.message}
                />
                <Input
                    name='password'
                    placeholder='Crie uma senha'
                    control={control}
                    KeyboardType='default'
                    error={errors.password?.message}
                    secureTextEntry={true}
                />

                <Button text='Criar conta' onPress={handleSubmit(handleRegister)} />
            </View>

            <View style={styles.footer} >
                <Text style={styles.text}>Já tenho conta.</Text>

                <Link href={"/(openRoutes)/login"} asChild>
                    <TouchableOpacity>
                        <Text style={styles.span}>Acessar conta</Text>
                    </TouchableOpacity>
                </Link>
            </View>
        </SafeAreaView>
    )
}
