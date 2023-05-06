package com.psesmuiot; // replace your-apps-package-name with your app’s package name
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import java.util.Map;
import java.util.HashMap;
import android.util.Log;
import java.util.Random;

public class CalendarModule extends ReactContextBaseJavaModule {

    private int eventCount = 0;
    CalendarModule(ReactApplicationContext context) {
        super(context);
    }

    // add to CalendarModule.java
    @Override
    public String getName() {
        return "CalendarModule";
    }

    @ReactMethod
    public void createCalendarEvent(String name, String location, Callback callBack) {
        Random rand = new Random();
        Log.d("CalendarModule", "Create event called with name: " + name
                + " and location: " + location);
        Integer eventId = rand.nextInt(1000);
        callBack.invoke(eventId);
    }

    @ReactMethod
    public void createCalendarPromise(String name, String location, Promise promise) {
        Random rand = new Random();
        try {
            Integer eventId = rand.nextInt(1000);
            promise.resolve(eventId);
            eventCount++;
            sendEvent(getReactApplicationContext(),
                    "EventCount", eventCount);
        } catch(Exception e) {
            promise.reject("Create Event Error", e);
        }
    }

    private void sendEvent(ReactContext reactContext,
                           String eventName,
                           int params) {
        reactContext
                .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit(eventName, params);
    }
}