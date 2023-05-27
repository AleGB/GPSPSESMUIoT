package com.psesmuiot; // replace your-apps-package-name with your app’s package name

public class Ubicacion {
    private String latitud;
    private String longitud;
    private String fechaHora;

    public Ubicacion() {
        // Constructor vacío requerido para Firebase
    }

    public Ubicacion(String latitud, String longitud, String fechaHora) {
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

    public String getFechaHora() {
        return fechaHora;
    }
}
