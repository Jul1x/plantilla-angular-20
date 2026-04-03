import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { AlertaService } from '../servicios/alerta';

// 🛑 Interceptor Global de Errores
// Cualquier petición HTTP que falle pasará por este lugar automáticamente
// para mostrarle un mensaje de error al usuario, ahorrándote escribir esto en todas partes.
export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const alertaService = inject(AlertaService);

  return next(req).pipe(
    catchError((error) => {
      console.error('Interceptor atrapó el error:', error);
      
      // Intentar extraer el mensaje de error del servidor o mostrar uno genérico
      let mensajeError = 'No se pudo completar la operación. Verifica tu conexión.';
      
      if (error.error && typeof error.error === 'string') {
        mensajeError = error.error;
      } else if (error.error && error.error.message) {
        mensajeError = error.error.message;
      }

      alertaService.error(mensajeError, `Error ${error.status || ''}`);
      
      return throwError(() => error);
    })
  );
};
