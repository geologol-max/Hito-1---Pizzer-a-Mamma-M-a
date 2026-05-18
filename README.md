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

## Hito 5 - React Router I
En esta etapa se implementó el sistema de navegación utilizando React Router:
- **Navegación Declarativa**: Se reemplazó el manejo de estados manuales por rutas reales (`/`, `/login`, `/register`, `/cart`, `/pizza/p001`, `/profile`).
- **Páginas vs Componentes**: Se reorganizó la estructura del proyecto moviendo las vistas principales a la carpeta `src/pages`.
- **Nuevos Componentes**: Se crearon las páginas `Profile.tsx` (con información estática del usuario) y `NotFound.tsx` (manejador de errores 404 personalizado).
- **Navbar Dinámico**: El menú de navegación utiliza `NavLink` para resaltar la ruta activa y permitir transiciones sin recargar la página.
- **Ruta de Detalle**: Se habilitó la ruta `/pizza/p001` para visualizar la información extendida de un producto específico.

### Rutas Configuradas
- `/`: Inicio / Catálogo de Pizzas.
- `/register`: Formulario de registro.
- `/login`: Formulario de inicio de sesión.
- `/cart`: Carrito de compras con persistencia de estado.
- `/pizza/p001`: Detalle de la pizza Napolitana (estático por ahora).
- `/profile`: Perfil del usuario.
- `*`: Redirección a página 404 personalizada.
