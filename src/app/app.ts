import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// 🌟 Componente Principal (App)
// Este es el componente raíz de tu aplicación. Todos los demás componentes
// que vayas creando se renderizarán dentro de este.
@Component({
  selector: 'app-root', // El nombre de la etiqueta HTML para instanciar este componente en index.html
  imports: [RouterOutlet], // Importa aquí los módulos o componentes standalone que usarás en app.html
  templateUrl: './app.html', // Archivo HTML que contiene el diseño de tu componente
  styleUrl: './app.css' // Archivo CSS para los estilos exclusivos de este componente
})
export class App {
  // Las propiedades aquí están disponibles para mostrarse en app.html usando llaves {{ title() }}
  // 'signal' es la última reactividad de Angular 17+.
  protected readonly title = signal('plantilla-angular-20');
}
