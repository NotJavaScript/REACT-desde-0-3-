---

# Proyecto 3: Evolución de la App de GIFs (React desde 0)

Este repositorio representa la continuación directa del curso *"React JS desde 0"* de **midudev**. En esta etapa, he evolucionado la base inicial implementando soluciones de estado global y optimización de la lógica mediante hooks avanzados.

El objetivo principal de esta fase es profundizar en la gestión del estado y la experiencia de usuario, permitiendo una interacción real con la API de GIPHY sin modificar manualmente la URL.

---

## 🚀 Funcionalidades

### 1. Buscador Dinámico y Navegación

La aplicación ha dejado de ser estática para convertirse en una herramienta funcional de búsqueda.

* **Buscador de GIFs:** Se ha añadido una barra de búsqueda con validación para elegir términos de forma interactiva.
* **Historial Local:** Los últimos GIFs buscados aparecen en la página principal para un acceso rápido.
* **Navegación Intuitiva:** Implementación de rutas para regresar a la home o profundizar en un GIF específico al hacer clic sobre él.

### 2. Arquitectura de Estado y Lógica

Se ha dado un salto de calidad en la organización del código mediante patrones avanzados de React.

* **Custom Hooks:** Extracción de la lógica de negocio a hooks propios para limpiar los componentes y fomentar la reutilización.
* **React Context:** Creación de un estado global para gestionar la información compartida (como los resultados de búsqueda) sin necesidad de hacer *prop drilling*.

---

## 📝 Notas sobre el entorno

Para esta etapa del proyecto, se han integrado conceptos clave de la librería:

* **Hooks Avanzados:** Uso intensivo de `useEffect` y `useState` combinados con lógica personalizada.
* **Context API:** Configuración de Providers para envolver la aplicación y proveer datos globales.
* **Estado del proyecto:** Esta versión mejora la UX (User Experience) y prepara el terreno para optimizaciones de rendimiento y Testing en fases posteriores.

---

## 🎓 Objetivos de Aprendizaje

* [x] Creación y aplicación de **Custom Hooks** personalizados.
* [x] Implementación de **React Context** para el manejo de estado global.
* [x] Manejo de **formularios y eventos** de usuario (Buscador).
* [x] Gestión de **rutas y navegación** dinámica entre componentes.
* [x] Persistencia básica de datos para mostrar las "últimas búsquedas".

---
