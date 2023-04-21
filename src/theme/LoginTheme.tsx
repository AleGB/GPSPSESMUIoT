import { StyleSheet, Dimensions } from 'react-native';


export const LoginStyles = StyleSheet.create({
    viewForm: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        borderWidth: 0,
        backgroundColor: 'rgba(85, 85, 85, 0.6)',
        alignSelf: 'center'
    },
    form: {
        marginTop:25,
        paddingHorizontal: 25
    },
    passView:{
        alignItems: 'flex-end',
        top: 20,
        marginTop: 25,
        right: 15
    },
    passText:{
        fontSize: 12,
        color: 'white'
    },
    newAcountView:{
        alignItems: 'center',
        top: 20,
        marginTop: 25,
    },
    newAcountText:{
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white',
        textDecorationLine: 'underline',
        alignSelf: 'center'
    },
});