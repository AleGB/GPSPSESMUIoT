import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Menu } from './src/navigator/Menu';
import { PermissionsProvider } from './src/context/PermissionsContext';
import { enableLatestRenderer } from 'react-native-maps';
import { PermissionsSMSProvider } from './src/context/PermissionsSMSContext';
// import SmsScreen from './src/screens/SmsScreen';
// import SmsViewer from './src/hooks/SmsViewer';
import { NativeModules, NativeEventEmitter, View, Text, Button } from 'react-native';
import { ButtonElement } from './src/components/ButtonElement';

const { CalendarModule } = NativeModules;
console.log(CalendarModule);
const onPress = () => {
  CalendarModule.createCalendarEvent(
    'Party',
    'My House',
    (eventId: number) => {
      console.log(`Created a new event with id ${eventId}`);
    },
  );
};
const onSubmit = async () => {
  try {
    const eventId = await CalendarModule.createCalendarPromise(
      'Party',
      'My House',
    );
    console.log(`Created a new event with id ${eventId}`);

  } catch (e) {
    console.error(e);
  }
};

const eventEmitter = new NativeEventEmitter(CalendarModule);

enableLatestRenderer();

const AppState = ({ children }: any) => {

  return (
    <PermissionsProvider>
      {children}
    </PermissionsProvider>
  )

}
const AppStateSMS = ({ children }: any) => {

  return (
    <PermissionsSMSProvider>
      {children}
    </PermissionsSMSProvider>
  )

}
const App = () => {
  useEffect(() => {
    eventEmitter.addListener('EventCount', eventCount => {
      console.log("eventcount: "+eventCount)
    });
  
    return () => {
      eventEmitter.removeAllListeners("EventCount");
    };
  }, [])
  
  return (
    <View>
      <Text>App</Text>
      <ButtonElement
        title="Click to invoke your native module! callback"
        onPress={onPress}
      />
      <ButtonElement
        title="Click to invoke your native module! promise"
        onPress={onSubmit}
      />
    </View>
    //  <SmsViewer/>
    // <NavigationContainer>
    //   <AppStateSMS>
    //     <AppState>

    //       <Menu />
    //       {/* <Navigator/> */}
    //     </AppState>
    //   </AppStateSMS>
    // </NavigationContainer>
  )
}

export default App;

//psesmuiot@gmail.com pass: PS3SMU10T