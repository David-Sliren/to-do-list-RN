# RENPENTAIN - Smart Shopping Management 🛒

RENPENTAIN is a modern mobile app developed with **React Native** and **Expo**, designed to simplify and organize your shopping lists and supermarket visits. With an intuitive interface and fluid animations, it allows you to manage multiple lists, track purchased products, and efficiently organize your market trips.

## 🚀 Main Features

- **Supermarket Management**: Create, edit, and organize your favorite stores.

- **Detailed Lists**: Add specific products to each supermarket with "pending" or "purchased" statuses.

- **Flash Shopping**: Direct access to immediate and recurring shopping lists.

- **Smart Organization**: Support for reordering items to prioritize your purchases.

- **Data Persistence**: Your lists are automatically saved on your device using AsyncStorage, working completely offline.

- **Modern Interface**:

- Animations with **Moti** and **Lottie**.

- Bottom Sheet components for a native experience.

- Responsive and stylish design with **Tailwind CSS** (`twrnc`).

- Advanced visual effects with **Expo Blur** and **Linear Gradient**.

## 🛠️ Technology Stack

- **Framework**: [React Native](https://reactnative.dev/) + [Expo](https://expo.dev/) (SDK 54)
- **Navigation**: [Expo Router](https://docs.expo.dev/router/introduction/) (File-based)
- **Global State**: [Zusand](https://github.com/pmndrs/zustand) with persistence middleware.

- **Styles**: [twrnc](https://github.com/vbudinger/twrnc) (Tailwind CSS for React Native)
- **Animations**: [Moti](https://moti.fyi/), [Reanimated](https://docs.swmansion.com/react-native-reanimated/), [Lottie](https://github.com/lottie-react-native/lottie-react-native).
- **UI Components**: 
- `@gorhom/bottom-sheet` for interactive modals. 
- `expo-linear-gradient` for dynamic backgrounds. 
- `react-native-safe-area-context` for notch handling.

## 📂 Project Structure

```text
├── app/ # Routes and screens (Expo Router)
│ ├── index.jsx # Main screen (Home)
│ └── shopping/ # Shopping and supermarket module
├── components/ # Reusable and modular UI components
│ ├── Modals_types/ # Specific implementations of Bottom Sheets
│ └── screens/ # Base layouts for screens
├── store/ # Global state logic (Zustan)
│ ├── slices/ # Slices divided by functionality (stores/products)
│ └── shopping/ # Combination and persistence of store
├── hooks/ # Custom hooks for business logic
├── constants/ # Colors, settings, and themes
├── utils/ # Helper functions (dates, IDs, sorting)
└── assets/ # Images, icons, and Lottie animations
```

## ⚙️ Installation and Configuration

Follow these steps to run the project locally:

1. **Clone the repository**:

``bash
git clone <repository-url>
cd to-do-list-RN
```

2. **Install dependencies**:

This project uses `yarn`:

``bash
yarn install
```

3. **Start Expo**:

``bash
npx expo start
```

4. **Run in a Device/Emulator:

- Press `a` for Android.

- Press `i` for iOS.

- Scan the QR code with the Expo Go app.

## 🧠 State Architecture

The application uses a Slicer pattern with Zustand to keep the logic separate but combined in a single persistent store.

- Stores Slice: Handles supermarket creation and editing.

- Products Slice: Manages product logic, filtering by store ID and purchase status.

- Persistence: `createJSONStorage` with `AsyncStorage` is used to ensure data persistence after the application closes.

---

Developed with ❤️ for better daily organization.
