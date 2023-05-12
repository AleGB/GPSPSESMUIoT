package com.psesmuiot;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.util.Log;
import android.widget.Toast;
import android.os.Bundle;
import android.telephony.SmsMessage;


public class MyBroadcastReceiver extends BroadcastReceiver {
    private static final String TAG = "MyBroadcastReceiver";

    String mobNo;

    String msg;

    @Override

    public void onReceive(Context context, Intent intent) {
        Bundle bundle = intent.getExtras();
        Object[] smsObj = (Object[]) bundle.get("pdus");
        String format = bundle.getString("format");

        for (Object obj : smsObj) {
            SmsMessage message = SmsMessage.createFromPdu((byte[]) obj, format);
            mobNo = message.getDisplayOriginatingAddress();
            msg = message.getDisplayMessageBody();
        }
        Log.d(TAG, "Numero " + mobNo + " MSG " + msg);
    }
}