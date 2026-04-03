# 🚀 Plantilla Angular 20 (Boilerplate)

¡Bienvenido(a) a tu nueva plantilla de Angular 20! Este proyecto ya ha sido configurado como base para que puedas empezar a desarrollar rápidamente de forma muy organizada.

---

## 📦 Características Preconfiguradas

1. **Angular 20**: Utiliza componentes `standalone` por defecto y nuevas reactividades ligeras.
2. **PWA (Progressive Web App)**: Configuración lista para que tu aplicación ofrezca soporte **Offline** y sea instalable en teléfonos móviles y PC.
3. **Firebase**: Las librerías de conexión (`firebase` y `@angular/fire`) están instaladas en el `package.json` y listas para configurarse e inicializarse.
4. **SweetAlert2**: Alertas y notificaciones modernas integradas y listas para usar.

---

## 📂 Arquitectura del Proyecto (Patrón de Carpetas)

Para mantener el código organizado y escalable mientras tu aplicación educativa crece, este proyecto exige utilizar la siguiente estructura de tres carpetas principales ubicadas en `src/app/`:

### 1. 📄 `paginas/` (Vistas de Pantalla Completa)
Aquí residen los componentes principales que actúan como "pantallas" completas. Cada una de estas páginas suele estar enlazada directamente a una ruta (URL) en el archivo `app.routes.ts`.
- **Ejemplo**: `inicio`, `no-encontrado`, `panel-estudiante`.
- **Comando para crear una página**: 
  ```bash
  ng generate component paginas/nombre-de-la-pagina
  ```

### 2. 🧩 `compartido/` (Shared / Componentes Visuales Reutilizables)
Esta carpeta aloja los pedazos de la interfaz gráfica que vas a armar y reusar en múltiples partes de tu aplicación. Todo lo que contenga pertenece a la "Capa de UI" y no debería estar amarrado excesivamente a lógica de bases de datos.
- **Ejemplo**: `compartido/componentes/navbar`, `compartido/componentes/tarjeta-actividad`, `compartido/componentes/layout`.
- **Comando para crear un componente visual**:
  ```bash
  ng generate component compartido/componentes/nombre-del-componente
  ```

### 3. ⚙️ `nucleo/` (Core / Estado, Lógica y APIs)
A diferencia de los componentes visuales compartidos, el *núcleo* contiene la lógica pesada, la conexión a bases de datos, manejo de estado global (si un usuario hizo login o no) y los interceptores. Estos son recursos globales.
- **Ejemplo**: `nucleo/servicios/alerta.service.ts`, `nucleo/interceptores/error.ts`.
- **Comando para crear un servicio**:
  ```bash
  ng generate service nucleo/servicios/nombre-del-servicio
  ```

---

## 🛠️ Archivos Base y Flujo de Trabajo

Si eres un desarrollador importando esta plantilla, tus primeros pasos son:

1. **Revisar `src/app/app.routes.ts`**: Aquí registrarás las páginas (desde la carpeta `paginas/`) hacia las URLs.
2. **Revisar el Layout**: En `src/app/compartido/componentes/layout/`, está el contenedor principal donde todo se inyecta, aquí está incluido tu `Navbar`.

---

## 🚀 ¿Cómo Ejecutar tu Proyecto?

Lanza y observa los cambios en vivo en tu servidor local ejecutando:
```bash
npm start
```
Abre tu navegador en `http://localhost:4200/`. El sistema se auto-recargará con cada archivo que guardes en VS Code.

¡Mucho éxito desarrollando con esta `plantilla-angular-20`! Modifica este README como consideres necesario cuando tu proyecto cobre vida e identidad.
