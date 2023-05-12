import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../../styles/welcome';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

export default function Welcome() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View>
            <Animatable.Image
                animation={'pulse'}
                source={require('../../assets/image_quiz.png')} 
                style={styles.logoQuiz}
            />
            </View>
            <Animatable.View animation='pulse' style={styles.containerForm}>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => navigation.navigate('Entrar')}
                >
                    <Text style={styles.buttonText}>Iniciar</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    );
}