# Introduction to State – React Example

This project is a simple React application that demonstrates the concept of **state** in React. It shows how to use the `useState` hook to toggle the "strike-through" effect on a todo item.

<img width="1919" height="909" alt="image" src="https://github.com/user-attachments/assets/6c9a4d1a-276a-481d-9626-3ddeecc3bbcc" />

<img width="1919" height="899" alt="image" src="https://github.com/user-attachments/assets/f2dd8431-9ab7-45b2-b42a-565ee438de5c" />



## Overview

The app displays a todo item ("Buy milk") and two buttons:
- **Change to strike through:** Applies a line-through style to the text.
- **Change back:** Removes the line-through style.

This helps illustrate how state changes can update the UI in a React application.

```

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/BahaaJber1/Introduction-to-State.git
   ```
2. **Navigate to the project folder:**
   ```bash
   cd Introduction-to-State
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Run the app:**
   ```bash
   npm start
   ```
   This will start the development server and open the app in your browser.

## How It Works

- The `useState` hook initializes a state variable `isDone`.
- Two functions (`strike` and `unStrike`) update the state.
- The `<p>` element's style changes based on the value of `isDone`.

