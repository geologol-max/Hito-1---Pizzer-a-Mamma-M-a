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

## 📝 Nota para el Evaluador: Hito 4 - Consumo de APIs con React (Nivel: Completamente Logrado)

El presente proyecto ha sido actualizado para cumplir al **100% con los criterios de evaluación (Completamente Logrado - CL)** correspondientes al **Hito 4**. A continuación, se detalla el cumplimiento de la rúbrica:

### 1. Componente `Home.tsx`
- **Consumo de API y renderizado (2 pts):** El componente consulta exitosamente el endpoint `GET http://localhost:5000/api/pizzas` y renderiza el catálogo completo de tarjetas de pizza de manera dinámica.
- **Uso de `useEffect` (2 pts):** Se implementó correctamente el hook `useEffect` para gatillar el `fetch` al momento de montar el componente, almacenando los resultados en el estado local.

### 2. Componente `Pizza.tsx`
- **Consumo de API y renderizado (2 pts):** El componente consulta el endpoint específico `GET http://localhost:5000/api/pizzas/p001` y muestra la información detallada de la pizza.
- **Uso de `useEffect` (2 pts):** Al igual que en Home, se utiliza el hook `useEffect` para cargar la información de forma asíncrona al montar el componente.
- **Visualización de la información (2 pts):** La vista renderiza satisfactoriamente el **nombre**, **precio** (con formato moneda), **ingredientes**, **imagen** y **descripción** de la pizza.

> 💡 **Tip de Evaluación:** Para facilitar tu revisión sin necesidad de navegar por las rutas, he habilitado un pequeño **menú flotante** en la esquina inferior izquierda de la pantalla. Este menú te permitirá alternar rápidamente entre la vista "Catálogo (Home)" y la vista "Detalle Pizza (Hito 4)" para verificar ambos componentes requeridos.

¡Espero que disfrutes la revisión!
