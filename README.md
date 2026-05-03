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

## Hito 3 - Pizzería Mamma Mía (Interactividad Completa)
En esta etapa se ha logrado la integración total de los componentes mediante la elevación de estado (Lift State Up) en `App.tsx`:
- **Estado Global Simulado**: El carrito (`cart`) se maneja en `App.tsx`, lo que permite que el `Navbar`, `Home` y `Cart` compartan la misma información en tiempo real.
- **Botón Añadir**: Las tarjetas en `Home` ahora pueden agregar productos al carrito dinámicamente.
- **Sincronización del Navbar**: El total mostrado en la barra de navegación se actualiza automáticamente al modificar el carrito.
- **Navegación Fluida**: Se permite volver al catálogo desde el carrito vacío, cumpliendo con los flujos de usuario esperados.
- **Tipado Fuerte**: Se crearon interfaces en `src/types.ts` para asegurar la integridad de los datos.
