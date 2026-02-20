# Arquitectura del Proyecto - RENPENTAIN 🏗️

Este documento detalla las decisiones arquitectónicas, patrones de diseño y flujos de datos utilizados en la aplicación **RENPENTAIN**.

## 🧬 Principios de Diseño

1.  **Reactividad Atómica**: Cada componente UI es responsable de su propia lógica de presentación, delegando la lógica de negocio a hooks personalizados.
2.  **Estado Unidireccional**: El flujo de datos sigue el patrón de Zustand, donde los cambios se realizan mediante acciones definidas en los *slices*.
3.  **Diseño Atómico (Adaptado)**: Los componentes se dividen en:
    *   **Átomos/Moléculas**: `ButtonAdd.jsx`, `InputAdd.jsx`, `CheckItem.jsx`.
    *   **Organismos**: `BannerList.jsx`, `ModalCart.jsx`.
    *   **Pantallas**: `ShoppingScreen.jsx`.

## 🧠 Gestión de Estado (Zustand)

La aplicación utiliza un store centralizado localizado en `store/shopping/shopping.js`, el cual combina varios *slices*:

*   `shopping.stores.js`: Gestiona la lista de supermercados.
*   `shopping.products.js`: Gestiona el inventario de productos vinculados por ID.

### Flujo de Datos

1.  El usuario interactúa con un componente (ej. `Supermarket.jsx`).
2.  El componente llama a un método proporcionado por un hook personalizado (ej. `useShopping_index.jsx`).
3.  El hook invoca una acción en el store de **Zustand**.
4.  El store actualiza el estado y persiste los cambios en **AsyncStorage**.
5.  Los componentes suscritos se renderizan con el nuevo estado.

## 🛣️ Enrutamiento (Expo Router)

Se utiliza un sistema de rutas basado en archivos (`File-based routing`):

*   `/`: Pantalla de inicio con accesos rápidos.
*   `/shopping`: Listado general de supermercados.
*   `/shopping/[id]`: Pantalla dinámica que muestra los productos de un supermercado específico.

## 🎨 Sistema de Estilos y Temas

*   **Tailwind CSS (`twrnc`)**: Se utiliza para mantener una consistencia visual rápida y modular sin necesidad de hojas de estilo extensas.
*   **Constants**: Los colores y configuraciones personalizadas se centralizan en `constants/colorsPrincipals.js` y `constants/Personalized.js`, facilitando cambios globales de tema.

## 🛠️ Utilidades y Ayudantes

*   `utils/id.js`: Generación de IDs únicos (utilizando `nanoid`).
*   `utils/order.js`: Lógica para el reordenamiento de listas, vital para la funcionalidad de organización personalizada.
*   `utils/date.js`: Formateo de fechas para posibles registros históricos.

---

Este enfoque modular garantiza que la aplicación sea escalable, fácil de mantener y probar.
