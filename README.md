# 📌 React Coding Challenge - Skip Selection Page Redesign

## ✅ Project Overview

This project is a redesigned version of the “Skip Select” page provided by REM Waste (https://wewantwaste.co.uk/). The objective is to enhance the visual appearance and user experience while preserving the original functionality. This redesign focuses on writing clean, maintainable React code, improving UI/UX, and ensuring responsive design compatibility for both mobile and desktop browsers.

### 🌐 Live Demo

[Live Demo on Vercel](https://rem-waste-skip-redesign-3fqg7wa3p-indams-projects.vercel.app/)

---

## 💡 Technologies & Tools Used

- **React (TypeScript)** - For building a robust, type-safe UI.
- **TailwindCSS** - For fast, responsive, and modern styling. And also to implement the existing styling.
- **useReducer** - For managing state of data fetched from the REST API.
- **Context API** - For managing global state like the input and the current step.
- **Vite (Development Tool)** - For fast React development.

---

## 📁 Folder Structure

```
/public               # Documents accessible publicly
/src
├── /assets           # List of assets (images, icons, etc.)
├── /components       # React components
├── /constants        # List of constants
├── /contexts         # Context Providers for managing global state
├── /hooks            # Custom hooks (e.g., useFetchSkips)
├── /types            # TypeScript interfaces and enums
├── App.tsx           # Main app file
├── index.css         # Main CSS style
├── main.tsx          # ReactDOM rendering
```

---

## 🔍 Features

- **Improved UI/UX:**

  - Enhanced styling using TailwindCSS for modern visuals.
  - Consistent use of typography, colors, and spacing for better readability.
  - Better responsiveness for mobile and desktop views.

- **State Management:**

  - Local state handling using `useState` and `useReducer` where appropriate.
  - Optional use of `useContext` for global state management like user input.

- **Data Fetching:**

  - Asynchronous data fetching from the provided API.
  - Error handling and loading states managed effectively.

- **Dynamic Rendering:**

  - Display of skip options based on API data.
  - Improved grammar consistency (e.g., “4-yard skip”, “14-day hire”) for readability.
  - Refined Bottom Bar for Improved User Experience.

- **Accessibility Considerations:**
  - Improving readability for screen readers.
  - Using clear and concise labels and text.

---

## 📌 How To Run The Project

1. Clone the repository:

```bash
  git clone <your-repo-link>
```

2. Install dependencies:

```bash
  npm install
```

3. Run the development server:

```bash
  npm run dev
```

---

## 📌 Potential Improvements

- Adding full test coverage for components.
- Improving responsiveness for smaller mobile devices.
- Adding animations for better user interaction.
- Finishing another flow of the page (outside the Skip Waste step).

---

## 📌 Notes

- The styling was initially based on the original page’s TailwindCSS setup. However, the design has been improved with better consistency, spacing, animation, typography, and responsiveness.
- Compound adjectives like “4-yard skip” and “14-day hire” were corrected to enhance clarity and professionalism.
- Dummy steps for the limited UI of “Waste Type” and “Permit Check” have been created to demonstrate the mini flow. The back button is disabled on the “Waste Type” step, and the continue button is disabled on the “Permit Check”.

---

## 📌 License

This project is for demonstration purposes of the coding challenge only.
