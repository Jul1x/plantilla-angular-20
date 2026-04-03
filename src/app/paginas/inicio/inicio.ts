import { Component, inject, signal } from '@angular/core';
import { AlertaService } from '../../nucleo/servicios/alerta';

@Component({
  selector: 'app-inicio',
  imports: [],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css'
})
export class Inicio {
  // 💉 Inyección del servicio de alertas que acabamos de crear en el 'nucleo'
  private alertaService = inject(AlertaService);
  
  // ⚡ Ejemplo de uso de Signals (El nuevo reactivo estándar en Angular 17+)
  // Usar signal es mejor que declarar variables sueltas como contador = 0;
  contadorClicks = signal(0);

  // Funciones de ejemplo
  incrementar() {
    this.contadorClicks.update(valorPrevio => valorPrevio + 1);
  }

  probarExito() {
    this.alertaService.exito('¡Has presionado el botón de prueba!', 'Bien hecho');
  }

  probarError() {
    this.alertaService.error('Algo ha salido mal en tus pruebas.', 'Error');
  }
}
