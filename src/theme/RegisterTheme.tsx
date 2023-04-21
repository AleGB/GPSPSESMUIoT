import { StyleSheet } from 'react-native';


export const RegisterStyles = StyleSheet.create({
    viewForm: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        borderWidth: 0,
        //backgroundColor: 'rgba(11, 62, 91, 0.6)',
        backgroundColor: 'rgba(85, 85, 85, 0.5)',
        alignSelf: 'center'
    },
    passView: {
        alignItems: 'flex-end',
        top: 20,
        marginTop: 25,
        right: 15
    },
    passText: {
        fontSize: 12,
        color: 'white'
    }
});