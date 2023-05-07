import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Menu } from './src/navigator/Menu';
import { PermissionsProvider } from './src/context/PermissionsContext';
import { enableLatestRenderer } from 'react-native-maps';
import { PermissionsSMSProvider } from './src/context/PermissionsSMSContext';
// import SmsScreen from './src/screens/SmsScreen';
// import SmsViewer from './src/hooks/SmsViewer';
import { NativeModules, NativeEventEmitter, View, Text, Button } from 'react-native';
import { ButtonElement } from './src/components/ButtonElement';


// const { CalendarModule } = NativeModules;
// console.log(CalendarModule);

// const onPress = () => {
//   CalendarModule.createCalendarEvent(
//     'Party',
//     'My House',
//     (eventId: number) => {
//       console.log(`Created a new event with id ${eventId}`);
//     },
//   );
// };
// const onSubmit = async () => {
//   try {
//     const eventId = await CalendarModule.createCalendarPromise(
//       'Party',
//       'My House',
//     );
//     console.log(`Created a new event with id ${eventId}`);

//   } catch (e) {
//     console.error(e);
//   }
// };

// const eventEmitter = new NativeEventEmitter(CalendarModule);
// const smsEventEmitter = new NativeEventEmitter(CalendarModule);

// smsEventEmitter.addListener('NewSMSReceived', (event) => {
//   console.log('SMS recibido:', event.sender, event.message);
// });

// CalendarModule.startSMSReader();


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
  // const [smsInfo, setSmsInfo] = useState<null | { sender: string, message: string }>(null);

  // const handleNewSMSReceived = (event: { sender: string, message: string }) => {
  //   const { sender, message } = event;
  //   console.log('Nuevo mensaje recibido:', sender, message);
  //   setSmsInfo({ sender, message });
  // };
  // useEffect(() => {
  //   const smsReceivedListener = smsEventEmitter.addListener('NewSMSReceived', handleNewSMSReceived);
  //   //CalendarModule.startSMSReader();
  //   return () => {
  //     smsReceivedListener.remove();
  //   };
  // }, []);



  // useEffect(() => {
  //   eventEmitter.addListener('EventCount', eventCount => {
  //     console.log("eventcount: " + eventCount)
  //   });

  //   return () => {
  //     eventEmitter.removeAllListeners("EventCount");
  //   };
  // }, [])

  return (
    // <View>
    //   <Text>App</Text>
    //   {/* <ButtonElement
    //     title="Click to invoke your native module! callback"
    //     onPress={onPress}
    //   />
    //   <ButtonElement
    //     title="Click to invoke your native module! promise"
    //     onPress={onSubmit}
    //   /> */}
    //   {/* <View>
    //     {smsInfo ? (
    //       <View>
    //         <Text>Remitente: {smsInfo.sender}</Text>
    //         <Text>Mensaje: {smsInfo.message}</Text>
    //       </View>
    //     ) : (
    //       <Text>No se ha recibido ningún mensaje.</Text>
    //     )}
    //   </View> */}
    // </View>
    //  <SmsViewer/>
    <NavigationContainer>
      <AppStateSMS>
        <AppState>

          <Menu />
          {/* <Navigator/> */}
        </AppState>
      </AppStateSMS>
    </NavigationContainer>
  )
}

export default App;

//psesmuiot@gmail.com pass: PS3SMU10T