import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    question: {
        width: "80%",
        fontSize: 20, 
        fontWeight: 'bold', 
        marginBottom: 20,
        color: '#D2691E'
    },
    buttons: {
        width: '100%',
        backgroundColor: '#D2691E',
        textAlign: 'center',
        paddingTop: 5,
        paddingBottom: 8,
        paddingHorizontal: 5,
        borderRadius: 5,
        marginTop: 20,
        fontSize: 20,
        textAlign: 'center',
        color: 'white'
    },
    buttonsFinalizar: {
        width: '80%',
        backgroundColor: '#006400',
        textAlign: 'center',
        paddingTop: 5,
        paddingBottom: 8,
        paddingHorizontal: 5,
        borderRadius: 5,
        marginTop: 20,
        fontSize: 20,
        textAlign: 'center',
        color: 'white'
    },
    buttonsAnterior: {
        width: '100%',
        backgroundColor: '#D2691E',
        textAlign: 'center',
        paddingTop: 5,
        paddingBottom: 8,
        paddingHorizontal: 10,
        borderRadius: 5,
        marginTop: 20,
        fontSize: 20,
        textAlign: 'center',
        color: 'white'
    },
})