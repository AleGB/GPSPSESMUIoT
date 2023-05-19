import React from 'react'
import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import { HomeScreen } from '../screens/HomeScreen';
import { Navigator } from './Navigator';
import { Image, Text, View, useWindowDimensions, TouchableOpacity } from 'react-native';
import { MenuStyles } from '../theme/MenuTheme';
import { EditScreen } from '../screens/EditScreen';
import { AddDeviceScreen } from '../screens/AddDeviceScreen';
import { LocationHistoryScreen } from '../screens/LocationHistoryScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import { StackScreenProps } from '@react-navigation/stack';
import { outLogin } from '../hooks/LoginHook';
import { LoginScreen } from '../screens/LoginScreen';
import { MapsScreen } from '../screens/MapsScreen';
import { DeviceScreen } from '../screens/DeviceScreen';

const Drawer = createDrawerNavigator();

export const Menu = () => {

    const { width } = useWindowDimensions();

    return (
        <Drawer.Navigator drawerContent={(props) => <MenuContent {...props} />} screenOptions={{
            drawerType: width >= 768 ? 'permanent' : 'front',
            drawerStyle: { backgroundColor: 'white' },
            headerStyle: { height: 40 },
            headerTitleAlign: 'center',
            headerTitleStyle: { fontSize: 10, color: 'black' },
        }}>

            <Drawer.Screen name="Navigator" options={{ headerShown: false }} component={Navigator} />
            <Drawer.Screen name="HomeScreen" options={{ title: "Dispositivos registrados" }} component={HomeScreen} />
            <Drawer.Screen name="EditScreen" options={{ title: "Editar información" }} component={EditScreen} />
            <Drawer.Screen name="AddDeviceScreen" options={{ title: "Vincular dispositivo" }} component={AddDeviceScreen} />
            <Drawer.Screen name="LocationHistoryScreen" options={{ title: "Historial de ubicaciones" }} component={LocationHistoryScreen} />
            <Drawer.Screen name="MapsScreen" options={{ title: "Mapa" }} component={MapsScreen} />
            <Drawer.Screen name="DeviceScreen" options={{ title: "Dispositivo" }} component={DeviceScreen} />
        </Drawer.Navigator>
    );
}

const MenuContent = ({ navigation }: DrawerContentComponentProps) => {
    return (
        <DrawerContentScrollView>
            {/* Avatar */}
            <View style={MenuStyles.avatarContainer}>
                <Image style={MenuStyles.avatar} source={require('./../images/avatar.png')} />
            </View>

            {/* Body Menu */}

            <View style={MenuStyles.menuContainer}>
                <TouchableOpacity style={MenuStyles.menuButton} onPress={() => navigation.navigate('HomeScreen')}>
                    <Icon name="hardware-chip-outline" size={20} color={"#000000"} style={{ margin: 5 }} />
                    <Text style={MenuStyles.menuText}>Dispositivos registrados</Text>
                </TouchableOpacity >

                <TouchableOpacity style={MenuStyles.menuButton} onPress={() => navigation.navigate('EditScreen')}>
                    <Icon name="create-outline" size={20} color={"#000000"} style={{ margin: 5 }} />
                    <Text style={MenuStyles.menuText}>Editar información</Text>
                </TouchableOpacity >

                <TouchableOpacity style={MenuStyles.menuButton} onPress={() => navigation.navigate('AddDeviceScreen')}>
                    <Icon name="link-outline" size={20} color={"#000000"} style={{ margin: 5 }} />
                    <Text style={MenuStyles.menuText}>Vincular dispositivo</Text>
                </TouchableOpacity>

                <TouchableOpacity style={MenuStyles.menuButton} onPress={() => navigation.navigate('LocationHistoryScreen')}>
                    <Icon name="document-text-outline" size={20} color={"#000000"} style={{ margin: 5 }} />
                    <Text style={MenuStyles.menuText}>Historial de ubicaciones</Text>
                </TouchableOpacity>

                <TouchableOpacity style={MenuStyles.menuButton} onPress={() => {
                    outLogin(navigation);
                    // return navigation.navigate('Navigator')
                }}>
                    <Icon name="log-out-outline" size={20} color={"#000000"} style={{ margin: 5 }} />
                    <Text style={MenuStyles.menuText}>Cerrar sesión</Text>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    );
}
