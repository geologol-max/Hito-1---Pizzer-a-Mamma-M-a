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

## Hito 6 - Context API (Manejo de Estado Global)
En esta etapa se implementó el almacenamiento y gestión de estados de forma global utilizando la API de Contextos de React para evitar el sobreuso de paso de propiedades (*prop drilling*):
- **CartContext & CartProvider**: Centraliza todo el estado del carrito de compras (`cart`), funciones de agregación (`addToCart`), sumatoria de unidades (`increaseCount`), reducción y eliminación automática si el conteo llega a cero (`decreaseCount`), cálculo en tiempo real del costo de la compra (`total`), y la cantidad total de unidades (`totalItems`).
- **PizzaContext & PizzaProvider**: Automatiza el consumo de la API de pizzas (`http://localhost:5000/api/pizzas`) y el detalle por identificador (`/api/pizzas/:id`), manejando loaders visuales, capturas en bloques de error, y reintentos (cumpliendo con el requerimiento opcional 6 de manera profesional).
- **Navbar Consumidor**: Sintoniza el subtotal de compras con el estado global de forma reactiva.
- **Detalle de Pizza Dinámico**: El componente `Pizza.tsx` y el catálogo `Home.tsx` consumen este almacén, permitiendo al usuario añadir pizzas desde cualquiera de las dos pantallas con un solo clic.

## Hito 7 - React Router II & Rutas Protegidas
En esta fase se han profundizado los alcances de la navegación y control de acceso utilizando hooks avanzados de React Router y manejadores de estado globales adicionales:
- **useParams en Detalle Dinámico**: Se reconfiguró la ruta de detalles de pizzas a `/pizza/:id` obteniendo el parámetro de la URL mediante el hook `useParams()`. El componente `Pizza.tsx` ahora consulta dinámicamente cada pizza por `id`. 
- **UserContext & UserProvider**: Se creó un contexto global para persistir la autenticación del usuario. El estado `token` se inicia por defecto en `true` y expone métodos de `logout()` y `login()` para alternar de forma segura entre sesiones.
- **Navbar & Navegación Condicional**: Consume `UserContext` para mostrar de manera condicional los accesos privados (`Profile`, `Logout`) o públicos (`Login`, `Register`). La opción `Logout` ejecuta directamente el método de cierre de sesión global.
- **Cart Persistente Protegido**: El botón de "Pagar" en la página `Cart` se deshabilita dinámicamente si `token` es `false`, añadiendo avisos estilizados en la UI para mejorar el guiado y la experiencia de usuario.
- **Rutas Protegidas en App.tsx**: Se implementaron redirecciones programáticas condicionales utilizando `<Navigate />`:
  - Si el `token` es `false`, intentar ingresar a `/profile` redirige a `/login`.
  - Si el `token` es `true`, los usuarios activos no pueden visitar `/login` o `/register`, barriendo el acceso y devolviéndoles directamente al inicio (`/`).
- **Control Integrado en Formularios**: Al enviar de forma correcta formularios en las páginas `Login` y `Register`, se invoca la acción `login()` de nuestro `UserContext` para facilitar pruebas y transiciones fluidas de sesión.

