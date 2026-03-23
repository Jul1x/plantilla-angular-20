# 🚀 Plantilla Angular 20 (Boilerplate)

¡Bienvenido(a) a tu nueva plantilla de Angular 20! Este proyecto ya ha sido configurado como base para que puedas empezar a desarrollar rápidamente.

---

## 📦 Características Preconfiguradas

1. **Angular 20**: Utiliza las últimas características (`signals`, componentes standalone, etc).
2. **PWA (Progressive Web App)**: Configurado nativamente para que tu aplicación pueda ser instalada en dispositivos móviles o de escritorio y tenga soporte **Offline** gracias a su *Service Worker*.
3. **Firebase & @angular/fire**: Las librerías están instaladas y listas para usar. Solo necesitas inicializar tu proyecto con tus llaves y entornos.
4. **SweetAlert2**: Alertas modernas, hermosas y responsivas listas para usarse en tus componentes.

---

## 📂 Estructura Principal del Proyecto

Si eres nuevo(a) en Angular, aquí tienes una guía rápida de los archivos que debes editar para empezar:

- `src/main.ts`: Es la puerta de entrada de tu aplicación. Inicia el componente base. Rara vez necesitas editarlo profundamente.
- `src/app/app.ts` (Componente Raíz): Aquí va tu lógica inicial en TypeScript. Todo lo que pongas aquí controlará la vista principal.
- `src/app/app.html` (Vista Raíz): Aquí diseñas tu aplicación. Edita este archivo para construir tu página principal o el diseño envolvente (Navbar, Footer, etc).
- `src/app/app.routes.ts` (Tus Rutas): Aquí le dices a Angular cómo navegar entre diferentes vistas o páginas (por ejemplo: Inicio, Catálogo, Perfil).
- `src/app/app.config.ts` (Configuración): Donde inyectarás servicios globales como base de datos o el enrutador.
- `angular.json`: El archivo maestro de configuración de Angular donde declaras tus recursos, estilos globales (`src/styles.css`) y configuraciones de construcción.

---

## 🛠️ ¿Cómo Continuar Creando?

Angular te permite generar archivos rápidamente desde la terminal utilizando su CLI:

### 1. Crear un Componente (Una nueva sección o botón)
Ejecuta el siguiente comando para generar un nuevo componente (por ejemplo, "catalogo"):
```bash
ng generate component catalogo
```
Esto creará una carpeta en `src/app/catalogo/` con su TypeScript, HTML y CSS.

### 2. Crear un Servicio (Para obtener datos)
Si necesitas lógica para contactar Firebase o hacer cálculos:
```bash
ng generate service fire-db
```

### 3. Ejecutar el Proyecto
Para lanzar tu aplicación en modo desarrollador:
```bash
ng serve
```
Y luego abre tu navegador en `http://localhost:4200` (este comando auto-recarga los cambios que hagas).

---
¡Mucho éxito con tu proyecto `plantilla-angular-20`! Puedes modificar todos los comentarios guía de los archivos y este README en medida de que vayas avanzando.
