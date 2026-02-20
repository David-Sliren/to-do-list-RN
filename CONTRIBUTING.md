# Guía de Contribución - RENPENTAIN 🤝

¡Gracias por tu interés en mejorar **RENPENTAIN**! Sigue estas pautas para asegurar un proceso de desarrollo fluido.

## 🛠️ Entorno de Desarrollo

1.  Asegúrate de tener instalado **Node.js** (LTS recomendado).
2.  Utiliza **Yarn** para la gestión de dependencias.
3.  Instala la extensión de **ESLint** en tu editor para mantener la consistencia del código.

## 🌿 Flujo de Trabajo de Git

1.  Crea una rama descriptiva para tu cambio: `git checkout -b feature/nueva-funcionalidad` o `git checkout -b fix/error-especifico`.
2.  Realiza commits pequeños y con mensajes claros.
3.  Asegúrate de que la aplicación compile sin errores antes de enviar tu cambio.

## 🎨 Estándares de Código

*   **Componentes**: Usa componentes funcionales con Hooks.
*   **Estilos**: Prioriza el uso de `twrnc` para mantener el estilo Tailwind.
*   **Documentación**: Si añades un nuevo hook o utilidad, añade un bloque JSDoc explicando su funcionamiento.
*   **Estado**: Añade las acciones al slice correspondiente en `store/slices/`.

## 🧪 Pruebas

Antes de realizar un Pull Request, verifica:
1.  Que la navegación por Expo Router funcione correctamente.
2.  Que el estado de Zustand se persista correctamente tras reiniciar la app.
3.  Que las animaciones de Moti y Lottie no causen degradación de rendimiento.

---

¡Tu ayuda hace que esta aplicación sea mejor para todos! 🚀
