#include <stdio.h>
#include <string.h>
#include "pico/stdlib.h"
#include "hardware/uart.h"
#include "hardware/timer.h"

// Configuración del módulo GSM
#define GSM_UART_ID uart1
#define GSM_UART_BAUD_RATE 9600
#define GSM_TX_PIN 0
#define GSM_RX_PIN 1

// Configuración del módulo GPS
#define GPS_UART_ID uart0
#define GPS_UART_BAUD_RATE 9600
#define GPS_TX_PIN 2
#define GPS_RX_PIN 3

// Intervalo de envío de SMS en segundos
#define SMS_INTERVAL 300 // 5 minutos

// Función para enviar comandos AT al módulo GSM
void sendATCommand(const char *command, char *response, int response_size) {
    uart_puts(GSM_UART_ID, command);
    uart_puts(GSM_UART_ID, "\r\n");
    sleep_ms(500);
    uart_gets(GSM_UART_ID, response, response_size);
}

int main() {
    stdio_init_all();

    // Inicialización del UART para el módulo GSM
    uart_init(GSM_UART_ID, GSM_UART_BAUD_RATE);
    gpio_set_function(GSM_TX_PIN, GPIO_FUNC_UART);
    gpio_set_function(GSM_RX_PIN, GPIO_FUNC_UART);

    // Inicialización del UART para el módulo GPS
    uart_init(GPS_UART_ID, GPS_UART_BAUD_RATE);
    gpio_set_function(GPS_TX_PIN, GPIO_FUNC_UART);
    gpio_set_function(GPS_RX_PIN, GPIO_FUNC_UART);

    char gsm_response[128];
    uint64_t last_sms_time = 0;

    // Configuración del módulo GSM
    sendATCommand("AT", gsm_response, sizeof(gsm_response));
    sendATCommand("AT+CMGF=1", gsm_response, sizeof(gsm_response)); // Modo de texto para SMS

    // Bucle principal
    while (1) {
        char gps_data[128];

        // Leer datos del módulo GPS
        uart_gets(GPS_UART_ID, gps_data, sizeof(gps_data));

        // Analizar los datos del GPS y obtener la ubicación actual
        // Aquí deberías implementar la lógica específica para tu módulo GPS

        // Verificar si ha pasado el tiempo suficiente desde el último envío de SMS
        uint64_t current_time = time_us_64();
        if ((current_time - last_sms_time) >= (SMS_INTERVAL * 1000000)) {
            // Enviar la ubicación actual a través de un mensaje SMS
            char sms_message[256];
            sprintf(sms_message, "Mi ubicacion actual es: latitud=%f, longitud=%f", latitud, longitud);
            sendATCommand("AT+CMGS=\"+1234567890\"", gsm_response, sizeof(gsm_response)); // Reemplaza con el número de teléfono destino
            uart_puts(GSM_UART_ID, sms_message);
            uart_putc(GSM_UART_ID, 0x1A);
            sleep_ms(500);
            uart_gets(GSM_UART_ID, gsm_response, sizeof(gsm_response));
    }

    return 0;
}
}