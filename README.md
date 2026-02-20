# RENPENTAIN - Gestión Inteligente de Compras 🛒

RENPENTAIN es una aplicación móvil moderna desarrollada con **React Native** y **Expo**, diseñada para simplificar y organizar tus listas de compras y supermercados. Con una interfaz intuitiva y animaciones fluidas, permite gestionar múltiples listas, realizar seguimientos de productos comprados y organizar tus visitas al mercado de manera eficiente.

## 🚀 Características Principales

- **Gestión de Supermercados**: Crea, edita y organiza tus establecimientos favoritos.
- **Listas Detalladas**: Añade productos específicos a cada supermercado con estados de "pendiente" o "comprado".
- **Compras Rápidas (Flash)**: Acceso directo para listas de compras inmediatas y recurrentes.
- **Organización Inteligente**: Soporte para reordenamiento de elementos para priorizar tus compras.
- **Persistencia de Datos**: Tus listas se guardan automáticamente en el dispositivo mediante `AsyncStorage`, funcionando totalmente offline.
- **Interfaz Moderna**:
  - Animaciones con **Moti** y **Lottie**.
  - Componentes de hoja inferior (**Bottom Sheets**) para una experiencia nativa.
  - Diseño responsivo y estilizado con **Tailwind CSS** (`twrnc`).
  - Efectos visuales avanzados con **Expo Blur** y **Linear Gradient**.

## 🛠️ Stack Tecnológico

- **Framework**: [React Native](https://reactnative.dev/) + [Expo](https://expo.dev/) (SDK 54)
- **Navegación**: [Expo Router](https://docs.expo.dev/router/introduction/) (Basada en archivos)
- **Estado Global**: [Zustand](https://github.com/pmndrs/zustand) con middleware de persistencia.
- **Estilos**: [twrnc](https://github.com/vbudinger/twrnc) (Tailwind CSS para React Native)
- **Animaciones**: [Moti](https://moti.fyi/), [Reanimated](https://docs.swmansion.com/react-native-reanimated/), [Lottie](https://github.com/lottie-react-native/lottie-react-native).
- **Componentes UI**:
  - `@gorhom/bottom-sheet` para modales interactivos.
  - `expo-linear-gradient` para fondos dinámicos.
  - `react-native-safe-area-context` para manejo de muescas (notches).

## 📂 Estructura del Proyecto

```text
├── app/                # Rutas y pantallas (Expo Router)
│   ├── index.jsx       # Pantalla principal (Home)
│   └── shopping/       # Módulo de compras y supermercados
├── components/         # Componentes UI reutilizables y modulares
│   ├── Modals_types/   # Implementaciones específicas de Bottom Sheets
│   └── screens/        # Layouts base para pantallas
├── store/              # Lógica de estado global (Zustand)
│   ├── slices/         # Slices divididos por funcionalidad (tiendas/productos)
│   └── shopping/       # Combinación y persistencia del store
├── hooks/              # Hooks personalizados para lógica de negocio
├── constants/          # Colores, configuraciones y temas
├── utils/              # Funciones de ayuda (fechas, IDs, ordenamiento)
└── assets/             # Imágenes, iconos y animaciones Lottie
```

## ⚙️ Instalación y Configuración

Sigue estos pasos para ejecutar el proyecto localmente:

1. **Clonar el repositorio**:

   ```bash
   git clone <url-del-repositorio>
   cd to-do-list-RN
   ```

2. **Instalar dependencias**:
   Este proyecto utiliza `yarn`:

   ```bash
   yarn install
   ```

3. **Iniciar Expo**:

   ```bash
   npx expo start
   ```

4. **Ejecutar en un dispositivo/emulador**:
   - Presiona `a` para Android.
   - Presiona `i` para iOS.
   - Escanea el código QR con la app **Expo Go**.

## 🧠 Arquitectura de Estado

La aplicación utiliza un patrón de **Slices** con Zustand para mantener la lógica separada pero combinada en un único store persistente.

- **Stores Slice**: Maneja la creación y edición de supermercados.
- **Products Slice**: Gestiona la lógica de productos, filtrado por ID de tienda y estados de compra.
- **Persistencia**: Se utiliza `createJSONStorage` con `AsyncStorage` para garantizar que los datos sobrevivan al cierre de la aplicación.

---

Desarrollado con ❤️ para una mejor organización diaria.
