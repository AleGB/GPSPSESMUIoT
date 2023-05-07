package com.psesmuiot;
import android.os.Bundle;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint;
import com.facebook.react.defaults.DefaultReactActivityDelegate;
import android.Manifest;
import android.content.pm.PackageManager;
import android.os.Bundle;
import android.widget.Toast;
import androidx.appcompat.app.AppCompatActivity;
import android.util.Log;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "PSESMUIoT";
  }

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(null);


    // Verificar si el permiso de recibir SMS está concedido
    /*if (checkSelfPermission(Manifest.permission.RECEIVE_SMS) != PackageManager.PERMISSION_GRANTED) {
      // Solicitar permiso para recibir SMS
      requestPermissions(new String[]{Manifest.permission.RECEIVE_SMS}, 1);
    }*/
    /*if (checkSelfPermission(Manifest.permission.RECEIVE_SMS) == PackageManager.PERMISSION_GRANTED) {
      // El permiso está concedido
      Toast.makeText(this, "El permiso de SMS está concedido", Toast.LENGTH_SHORT).show();
      Log.d("SMSReceiver", "Permiso para recibir SMS concedido.");
    } else {
      // El permiso está denegado
      Toast.makeText(this, "El permiso de SMS está denegado", Toast.LENGTH_SHORT).show();

    }*/
  }

  /**
   * Returns the instance of the {@link ReactActivityDelegate}. Here we use a util class {@link
   * DefaultReactActivityDelegate} which allows you to easily enable Fabric and Concurrent React
   * (aka React 18) with two boolean flags.
   */
  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new DefaultReactActivityDelegate(
        this,
        getMainComponentName(),
        // If you opted-in for the New Architecture, we enable the Fabric Renderer.
        DefaultNewArchitectureEntryPoint.getFabricEnabled(), // fabricEnabled
        // If you opted-in for the New Architecture, we enable Concurrent React (i.e. React 18).
        DefaultNewArchitectureEntryPoint.getConcurrentReactEnabled() // concurrentRootEnabled
        );
  }

  /*@Override
  public void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults) {
    super.onRequestPermissionsResult(requestCode, permissions, grantResults);
    if (requestCode == 1 && grantResults.length > 0 && grantResults[0] == PackageManager.PERMISSION_GRANTED) {
      // El permiso para recibir SMS fue concedido
      Toast.makeText(this, "Permiso para recibir SMS concedido.", Toast.LENGTH_SHORT).show();
      Log.d("SMSReceiver", "Permiso para recibir SMS concedido.");
    } else {
      // El permiso para recibir SMS fue denegado
      Toast.makeText(this, "Permiso para recibir SMS denegado.", Toast.LENGTH_SHORT).show();
      Log.d("SMSReceiver", "Permiso para recibir SMS denegado.");
    }
  }*/

}