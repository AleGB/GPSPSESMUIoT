package com.psesmuiot; // replace your-apps-package-name with your app’s package name

public class Mensaje {
    private String numero;
    private String contenido;

    public Mensaje() {
        // Constructor vacío requerido para Firebase
    }

    public Mensaje(String numero, String contenido) {
        this.numero = numero;
        this.contenido = contenido;
    }

    public String getNumero() {
        return numero;
    }

    public String getContenido() {
        return contenido;
    }
}
