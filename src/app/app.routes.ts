import { Routes } from '@angular/router';
import { Layout } from './compartido/componentes/layout/layout';

// 🗺️ Configuración de Rutas de la Aplicación
// Aquí se define a dónde te lleva cada enlace de tu página.
export const routes: Routes = [
  {
    // Ruta principal envuelta en nuestro Layout Visual base
    path: '',
    component: Layout, // El marco de diseño general
    children: [
      { path: '', redirectTo: 'inicio', pathMatch: 'full' },
      { 
        path: 'inicio', 
        // 🚀 Carga Perezosa (Lazy Loading): Importamos el componente solo cuando es necesario
        loadComponent: () => import('./paginas/inicio/inicio').then(c => c.Inicio)
      }
      // Agrega más rutas 'hijas' que necesiten tener Navbar y Footer aquí dentro
    ]
  },
  
  // Ruta especial para manejar cuando alguien escribe una URL incorrecta
  { 
    path: '**', 
    loadComponent: () => import('./paginas/no-encontrado/no-encontrado').then(c => c.NoEncontrado) 
  }
];
