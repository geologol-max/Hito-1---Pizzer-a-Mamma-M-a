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

## Hito 2 - Estados y Eventos
En esta etapa se agregaron los componentes de autenticación con manejo de estados (`useState`) y validaciones de formularios:
- `src/components/RegisterPage.tsx`: Formulario de registro con validaciones de campos obligatorios, longitud de contraseña (6+ caracteres) e igualdad de contraseñas.
- `src/components/LoginPage.tsx`: Formulario de login con validaciones de campos obligatorios y longitud de contraseña.

### Cómo cambiar de vista
Dado que aún no se implementa React Router (corresponde a hitos futuros), se ha añadido un selector flotante en la esquina inferior derecha para alternar entre **Home**, **Registro** y **Login** para facilitar la evaluación.
