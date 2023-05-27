package com.psesmuiot; // replace your-apps-package-name with your app’s package name
import com.google.firebase.Timestamp;

public class Ubicacion {
    private String latitud;
    private String longitud;
    private Timestamp fechaHora;

    public Ubicacion() {
        // Constructor vacío requerido para Firebase
    }

    public Ubicacion(String latitud, String longitud, Timestamp fechaHora) {
        this.latitud = latitud;
        this.longitud = longitud;
        this.fechaHora = fechaHora;
    }

    public String getLatitud() {
        return latitud;
    }

    public String getLongitud() {
        return longitud;
    }

    public Timestamp getFechaHora() {
        return fechaHora;
    }
}
