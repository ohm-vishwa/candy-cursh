# 🍬 Candy Crush React Native

Welcome to the **Candy Crush** clone! This project is a high-performance mobile game built with **React Native 0.85**, leveraging modern libraries like **Reanimated 4** for fluid animations and **Zustand** for lightning-fast state management.

---

## 🚀 Features

* **Silky Smooth Animations:** Powered by `react-native-reanimated` and `lottie-react-native`.
* **High Performance:** Uses `react-native-mmkv` for instant data storage and `react-native-nitro-modules`.
* **Immersive Audio:** Integrated sound effects using `react-native-sound-player`.
* **Modern Navigation:** Seamless screen transitions with `react-navigation` v7.
* **Responsive UI:** Perfectly scaled on all devices via `react-native-responsive-fontsize`.

---

## 🛠️ Tech Stack

| Category | Libraries |
| :--- | :--- |
| **Framework** | React Native 0.85.2, React 19 |
| **Styling** | React Native SVG, Responsive Fontsize |
| **State** | Zustand |
| **Animations** | Reanimated 4, Lottie |
| **Storage** | MMKV |
| **Multimedia** | Video, Sound Player |

---

## 📦 Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/ohm-vishwa/candy-crush.git
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```
3.  **iOS Setup:**
    ```bash
    cd ios && pod install && cd ..
    ```
4.  **Run the app:**
    ```bash
    npx react-native run-android # For Android
    npx react-native run-ios     # For iOS
    ```

---
### Folder Structure
```bash
src
├── assets....
├── components
│   ├── game
│   │   ├── GameFooter.tsx
│   │   ├── GameHeader.tsx
│   │   └── GameTile.tsx
│   ├── gamelogic
│   │   ├── gridUtils.tsx
│   │   └── useGameLogic.tsx
│   └── ui
│       ├── Footer.tsx
│       └── ScalePress.tsx
├── navigation
│   ├── Navigation.tsx
│   └── SoundContext.tsxsrc ➤ tree                                                                                                                                                     git:main
.
├── app
│   └── QuizScreen.tsx
├── components
│   ├── AnswerOption.tsx
│   ├── Card.tsx
│   ├── CustomButton.tsx
│   └── QuestionCard.tsx
├── hooks
│   └── useTimer.tsx
├── provider
│   └── QuizProvider.tsx
├── questions.ts
├── store
└── types.tsx
├── screens
│   ├── GameScreen.tsx
│   ├── HomeScreen.tsx
│   ├── index.js
│   ├── LevelScreen.tsx
│   └── SplashScreen.tsx
├── state
│   ├── storage.tsx
│   └── useLevelStore.tsx
├── styles
│   ├── commonStyles.tsx
│   └── levelStyles.tsx
├── type.dt.tsx
├── types.tsx
└── utils
    ├── Constants.tsx
    ├── data.tsx
    ├── NavigationUtil.tsx
    └── SoundUtility.tsx
```
---

## 📥 Download App

Ready to play? Get the latest build here:

👉 [Download Candy Crush apk](https://github.com/ohm-vishwa/candy-cursh/releases/download/apk/candy-crush-ohm.apk)

---

## 📸 Screenshots


<img src="./src/assets/images/Screenshot_20260504-212915.png" width="190" height="auto" /><img src="./src/assets/images/Screenshot_20260504-212937.png" width="190" height="auto" /><img src="./src/assets/images/Screenshot_20260504-212956.png" width="190" height="auto" /><img src="./src/assets/images/Screenshot_20260504-213009.png" width="190" height="auto" />


---

---

### 🍭 Sweet Thanks!

Thank you for checking out this project! If you enjoyed playing or exploring the code, feel free to ⭐ the repo. 

**Happy Crushing!** 🍬✨