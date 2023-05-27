package com.psesmuiot;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.util.Log;
import android.widget.Toast;
import android.os.Bundle;
import android.telephony.SmsMessage;
import com.google.firebase.firestore.FirebaseFirestore;
import com.google.android.gms.tasks.OnFailureListener;
import com.google.android.gms.tasks.OnSuccessListener;
import com.google.firebase.firestore.DocumentReference;
import androidx.annotation.NonNull;
import java.lang.*;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;


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
        String[] subcadenas = msg.split(",");
        String latitud = subcadenas[1];
        String longitud = subcadenas[2];
        String fechaHora = ObtenerFechaHora();
        
        latitud = convertLatitud(latitud);
        longitud = convertLongitud(longitud);


        System.out.println("Latitud: " + latitud);
        System.out.println("Longitud: " + longitud);
        System.out.println("fechaHora: " + fechaHora);
        Log.d(TAG, "Latitud " + latitud + " Longitud " + longitud + " fechaHora " + fechaHora);

        // Obtiene una referencia a la base de datos de Firebase
        FirebaseFirestore db = FirebaseFirestore.getInstance();
        Log.d(TAG, "database " + db);

        // Crea un nuevo objeto para el mensaje
        Ubicacion ubicacion = new Ubicacion(latitud,longitud,fechaHora);
        String ruta = "UbicacionesDispositivo/"+mobNo+"/Coordenadas";
        Log.d(TAG, "ruta " + ruta);

        db.collection(ruta)
                .add(ubicacion)
                .addOnSuccessListener(new OnSuccessListener<DocumentReference>() {
                    @Override
                    public void onSuccess(DocumentReference documentReference) {
                        Log.d(TAG, "DocumentSnapshot added with ID: " + documentReference.getId());
                    }
                })
                .addOnFailureListener(new OnFailureListener() {
                    @Override
                    public void onFailure(@NonNull Exception e) {
                        Log.w(TAG, "Error adding document", e);
                    }
                });
    }

    private static String convertLatitud(String latitud) {
        int ltdLength = latitud.length()-1;
        String grados = latitud.substring(0,2);
        String min = latitud.substring(2,ltdLength);
        return grados+" "+min+"'"+latitud.charAt(ltdLength);
    }
    private static String convertLongitud(String longitud) {
        int ltdLength = longitud.length()-1;
        String grados = longitud.substring(0,3);
        String min = longitud.substring(3,ltdLength);
        return grados+" "+min+"'"+longitud.charAt(ltdLength);
    }
    private static String ObtenerFechaHora () {
        LocalDateTime fechaHoraActual = LocalDateTime.now();
        DateTimeFormatter formato = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");
        String fechaHoraFormateada = fechaHoraActual.format(formato);

        System.out.println("Fecha y hora actual: " + fechaHoraFormateada);
        Log.d(TAG, "Fecha y hora actual: " + fechaHoraFormateada);
        return fechaHoraFormateada;
    }
}