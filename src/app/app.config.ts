/**
 * Configuración principal de la aplicación Angular
 * 
 * Este archivo contiene la configuración principal de la aplicación Angular, incluyendo:
 * 
 * 1. Configuración de Detección de Cambios:
 *    - Implementa ZoneChangeDetection con eventCoalescing activado
 *    - Optimiza el rendimiento de la detección de cambios
 *    - Mejora la gestión de eventos en la aplicación
 * 
 * 2. Configuración de Rutas:
 *    - Define las rutas principales de la aplicación
 *    - Configura la navegación entre componentes
 * 
 */
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};
