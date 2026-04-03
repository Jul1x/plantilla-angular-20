import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertaService {

  constructor() { }

  /**
   * Muestra un mensaje de éxito rápido (Toast)
   */
  exito(mensaje: string, titulo: string = '¡Éxito!') {
    Swal.fire({
      icon: 'success',
      title: titulo,
      text: mensaje,
      timer: 3000,
      timerProgressBar: true,
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
    });
  }

  /**
   * Muestra un mensaje de error destacable
   */
  error(mensaje: string, titulo: string = 'Ha ocurrido un error') {
    Swal.fire({
      icon: 'error',
      title: titulo,
      text: mensaje,
      confirmButtonColor: 'var(--color-primario)'
    });
  }

  /**
   * Muestra un mensaje de advertencia
   */
  advertencia(mensaje: string, titulo: string = 'Atención') {
    Swal.fire({
      icon: 'warning',
      title: titulo,
      text: mensaje,
      confirmButtonColor: 'var(--color-primario)'
    });
  }

  /**
   * Muestra un indicador de carga infalible que bloquea la pantalla
   */
  cargando(mensaje: string = 'Por favor, espere...') {
    Swal.fire({
      title: mensaje,
      allowEscapeKey: false,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });
  }

  /**
   * Cierra cualquier alerta, especialmente útil para cerrar la de "cargando()"
   */
  cerrar() {
    Swal.close();
  }

  /**
   * Pide confirmación al usuario antes de proceder a realizar alguna acción destructiva
   */
  confirmarAccion(mensaje: string, titulo: string = '¿Estás seguro?'): Promise<boolean> {
    return Swal.fire({
      title: titulo,
      text: mensaje,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'var(--color-exito)',
      cancelButtonColor: 'var(--color-error)',
      confirmButtonText: 'Sí, continuar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      return result.isConfirmed;
    });
  }
}
