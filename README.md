# Introduction to State – React Example

This project is a simple React application that demonstrates the concept of **state** in React. It shows how to use the `useState` hook to toggle the "strike-through" effect on a todo item.

<img width="1916" height="908" alt="image" src="https://github.com/user-attachments/assets/1a629c3b-faa4-44d6-bb87-c8ad0152ab9a" />

<img width="1913" height="909" alt="image" src="https://github.com/user-attachments/assets/2687ffda-94c5-4d1f-935b-f52b866261a0" />



## Overview

The app displays a todo item ("Buy milk") and two buttons:
- **Change to strike through:** Applies a line-through style to the text.
- **Change back:** Removes the line-through style.

This helps illustrate how state changes can update the UI in a React application.


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

