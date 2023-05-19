import { Dimensions, StyleSheet } from 'react-native';

export const GlobalStyles = StyleSheet.create({
    imgBgd: {
        position: 'absolute',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width
    },
    scrollView:{
        
    },
    form: {
        marginTop: 25,
        paddingHorizontal: 25
    },
    container: {
        flex: 1,
        width: '100%',
        borderWidth: 0,
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        alignSelf: 'center'
    },
    logoContainer: {
        justifyContent: 'center',
    },
    iconLocation: {
        alignItems: 'center',
        top: 70,
        right: 60,
    },
    titleView: {
        paddingHorizontal: 25
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        alignSelf: 'center',
        position: 'absolute',
        color: '#ffffff'
    },
    titleEncabezado: {
        fontSize: 5,
        fontWeight: 'normal',
        alignSelf: 'center',
        position: 'absolute',
        color: '#ffffff'
    },
    label1: {
        fontSize: 15,
        marginTop: 25,
        top: 50,
        fontWeight: 'bold'
    },
    label2: {
        fontSize: 15,
        marginTop: 25,
        top: 50,
        fontWeight: 'bold',
    },
    iconLocationEncabezado: {
        alignItems: 'center',
    },
    txtInputAndroid: {
        fontSize: 15,
        top: 40,
        marginTop: 10,
        // backgroundColor: 'white',
        // borderRadius: 15,
    },
    txtInputIOS: {
        fontSize: 15,
        top: 40,
        marginTop: 10,
        paddingBottom: 4
        // backgroundColor: 'white',
        // borderRadius: 15,
    },
    buttonContainerLogin: {
        alignItems: 'center',
        marginTop: 70
    },
    buttonContainer: {
        alignItems: 'center',
    },
    buttonStyleIOS: {
        backgroundColor: '#C0DBEA',
        borderWidth: 2,
        borderColor: '#BA90C6',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    buttonStyleAndroid: {
        backgroundColor: '#C0DBEA',
        borderWidth: 2,
        borderColor: '#BA90C6',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    
    buttonText: {
        fontSize: 20,
        color: 'white',
        padding: 3
    },
    titleScreen: {
        fontSize: 10,
        fontWeight: 'bold',
        color: 'white',
        padding: 3
    },
    mapsButton: {
        flexDirection: 'row',
        marginBottom: 30
    },
    saveButton: {
        marginBottom: 80
    },
    colums: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    columsTitles: {
        flexDirection: 'row',
    },
    titleContainer: {
        marginBottom: 10,
      },
    titleDispositivos: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
      }
});