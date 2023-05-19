import React, { createContext, useEffect, useState } from 'react';
import { AppState, Platform } from 'react-native';
import { check, PERMISSIONS, PermissionStatus, request, openSettings } from 'react-native-permissions';


export interface PermissionsState {
    SMSStatus: PermissionStatus;
}

export const permissionInitState: PermissionsState = {
    SMSStatus: 'unavailable',
}

type PermissionsSMSContextProps = {
    permissionsSMS: PermissionsState;
    askSMSPermission: () => void;
    checkSMSPermission: () => void;
}


export const PermissionsSMSContext = createContext({} as PermissionsSMSContextProps);



export const PermissionsSMSProvider = ({ children }: any) => {

    const [permissionsSMS, setPermissions] = useState(permissionInitState);

    useEffect(() => {
        checkSMSPermission();
        AppState.addEventListener('change', state => {

            if (state !== 'active') return;

            checkSMSPermission();
        });

    }, [])


    const askSMSPermission = async () => {

        let permissionStatus: PermissionStatus;

        if (Platform.OS === 'ios') {
            permissionStatus = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
        } else {
            permissionStatus = await request(PERMISSIONS.ANDROID.READ_SMS);
        }

        if (permissionStatus === 'blocked') {
            openSettings();
        }

        setPermissions({
            ...permissionsSMS,
            SMSStatus: permissionStatus
        });

    }

    const checkSMSPermission = async () => {
        let permissionStatus: PermissionStatus;

        if (Platform.OS === 'ios') {
            permissionStatus = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
        } else {
            permissionStatus = await request(PERMISSIONS.ANDROID.READ_SMS);
        }

        setPermissions({
            ...permissionsSMS,
            SMSStatus: permissionStatus
        });
    }




    return (
        <PermissionsSMSContext.Provider value={{
            permissionsSMS,
            askSMSPermission,
            checkSMSPermission,
        }}>
            {children}
        </PermissionsSMSContext.Provider>
    )

}



