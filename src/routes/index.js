import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Welcome from '../pages/Welcome';
import Signin from '../pages/Signin';
import Questions from '../pages/Questions';
import Result from '../pages/Result';

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#D2691E',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 30,
                },
            }}
        >
            <Stack.Screen
                name='Bem Vindo!'
                component={Welcome}
            />
            <Stack.Screen 
                name='Entrar'
                component={Signin}
            />
            <Stack.Screen 
                name='Questões'
                component={Questions}
            />
            <Stack.Screen 
                name='Resultado'
                component={Result}
            />
        </Stack.Navigator>
    )
}