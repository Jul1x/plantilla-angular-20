import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideServiceWorker } from '@angular/service-worker';

import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { errorInterceptor } from './nucleo/interceptores/error';

// 🔥 Configuración de Firebase (Se importa pero requiere que le pongas tus credenciales)
// import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
// import { provideAuth, getAuth } from '@angular/fire/auth';
// import { provideFirestore, getFirestore } from '@angular/fire/firestore';

// ⚙️ Configuración Global de la Aplicación
// Este archivo inyecta servicios globales para toda tu app.
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), // 🗺️ Inyecta las rutas definidas en app.routes.ts
    
    // 🌐 Interceptor de Errores e Inyector de HTTP Cliente
    provideHttpClient(withInterceptors([errorInterceptor])),

    // 📱 Configuración PWA para funcionamiento Offline
    provideServiceWorker('ngsw-worker.js', {
            enabled: !isDevMode(),
            registrationStrategy: 'registerWhenStable:30000'
    }),

    // 🧱 Configuración de Firebase - REEMPLAZA LOS DATOS PARA ACTIVAR 🔥
    // provideFirebaseApp(() => initializeApp({
    //   projectId: "TU-ID-DE-PROYECTO",
    //   appId: "TU-APP-ID",
    //   storageBucket: "TU-BUCKET.appspot.com",
    //   apiKey: "TU-API-KEY",
    //   authDomain: "TU-DOMINIO.firebaseapp.com",
    //   messagingSenderId: "TU-SENDER-ID",
    // })),
    // provideAuth(() => getAuth()),
    // provideFirestore(() => getFirestore()),
  ]
};
