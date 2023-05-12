import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    
    container:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    containerForm:{
        flex: 0.5,
        padding: 30,
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: 250
    },
    logoQuiz:{
        width: 500, 
        height: 500
    },
    button:{
        width: '100%',
        backgroundColor: '#D2691E',
        textAlign: 'center',
        paddingTop: 5,
        paddingBottom: 8,
        paddingHorizontal: 10,
        borderRadius: 100,
    },
    buttonText:{
        fontSize: 40,
        color: 'white',
        fontWeight: 'bold'
    }
})