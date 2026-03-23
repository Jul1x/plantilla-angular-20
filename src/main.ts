import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

// 🚀 Punto de Entrada Principal
// Aquí es donde Angular toma tu componente principal (App) y la configuración global (appConfig)
// para arrancar e inicializar la aplicación en el navegador.
bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
