# Pizzería Mamma Mía - Hito 1

Este proyecto es la implementación del primer hito del módulo de React para la Academia Desafío Latam.

## Descripción
El proyecto consiste en una aplicación de catálogo de pizzas desarrollada con **React** y **Vite**. Se han implementado componentes modulares, paso de propiedades (props) y renderizado condicional.

## Tecnologías Utilizadas
- **React 19**
- **Vite**
- **Tailwind CSS** (para el estilizado)
- **Lucide React** (iconografía)

## Estructura del Proyecto
- `src/components/Navbar.tsx`: Barra de navegación con lógica de autenticación simulada (token).
- `src/components/Header.tsx`: Encabezado visual de la aplicación.
- `src/components/Home.tsx`: Componente principal que integra el header y la grilla de productos.
- `src/components/CardPizza.tsx`: Componente reutilizable para mostrar los detalles de cada pizza.
- `src/components/Footer.tsx`: Pie de página informativo.

## Instrucciones para el Evaluador
1. Clonar el repositorio.
2. Ejecutar `npm install` para instalar las dependencias.
3. Ejecutar `npm run dev` para iniciar el servidor de desarrollo.
4. El proyecto será visible en `http://localhost:3000`.

## Hito 4 - Consumo de APIs con React
En esta etapa se implementó la conexión con un backend externo para cargar los datos dinámicamente:
- **Home.tsx**: Ahora consume la lista completa de pizzas desde `http://localhost:5000/api/pizzas` usando `useEffect` y `fetch`.
- **Pizza.tsx**: Nuevo componente que muestra el detalle de una sola pizza (p001) consultando `http://localhost:5000/api/pizzas/p001`.
- **Manejo de Errores**: Se incluyeron bloques `try/catch` para gestionar posibles fallas en las peticiones.
- **Transiciones y Feedback**: Se añadió un estado de carga visual mientras se obtienen los datos de la API.

### Notas de Evaluación
Para facilitar la revisión, se ha incluido un pequeño menú flotante en la esquina inferior izquierda que permite alternar entre la vista del catálogo dinámico y la vista de detalle de pizza requerida en este hito.
