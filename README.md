<div align="center">

# 🧩 Dev Stack

**Build Your Ideal Development Stack**

Browse frontend, backend, database, and tooling options side by side, and put together a shortlist for your next project — no spreadsheet required.

</div>

---

## 📖 About

Dev Stack is a technology explorer built for developers who are tired of losing track of which framework, database, or tool they were considering. It loads a curated list of technologies, lets you filter them by category, and lets you build a personal "stack" by adding the tools you're interested in — with instant feedback every step of the way.

## 🛠️ Built With

- **React 19** — component-based UI
- **TypeScript** — type safety across the app
- **Vite** — dev server and build tooling
- **Tailwind CSS v4** — utility-first styling
- **React Toastify** — toast notifications

## ✨ Features

- **Browse & filter technologies** — a responsive grid of tech cards pulled from a JSON data file, filterable by category (Frontend, Backend, Database, Language, Styling, DevOps, Tools).
- **Build your personal stack** — add technologies to a "Your Stack" panel with one click; duplicate adds are blocked with a friendly toast instead of a silent failure.
- **Fully responsive design** — a dedicated mobile layout (centered hero, collapsible nav, stacked footer) alongside the desktop layout, so the experience holds up on any screen size.

## 🚀 Getting Started

```bash
npm install
npm run dev
```

---

## 💬 React Q&A

**1. What is JSX, and why is it used in React?**
JSX is a syntax extension that lets you write HTML-like markup directly inside JavaScript. React uses it because it makes describing what the UI should look like much more readable than calling `React.createElement()` by hand — under the hood, JSX just compiles down to that anyway.

**2. What is the difference between props and state?**
Props are data passed *into* a component from its parent — the component receiving them can't change them. State is data a component manages *itself*, and it can change over time (usually in response to user actions), which causes the component to re-render.

**3. What does the `useState` hook do, and where did you use it in this project?**
`useState` lets a function component hold and update its own local data. In this project it's used for things like the list of technologies loaded from JSON, the array of tech IDs the user has added to their stack, the currently selected category filter, and whether the mobile menu is open.

**4. What does the `useEffect` hook do, and why did you need it to load the JSON data?**
`useEffect` runs a side effect after a component renders — things like fetching data, subscribing to something, or reading from the browser. Fetching the JSON isn't part of rendering itself, so it needs to happen in an effect: on the first render, `useEffect` kicks off the `fetch()` call, and once the data comes back, it's stored in state, which triggers a re-render with the real data.

**5. Why does every item in a `.map()` list need a unique `key` prop?**
React uses the `key` to tell items apart between renders, so it knows which ones were added, removed, or reordered instead of just re-rendering everything from scratch. Without a stable, unique key, React can mix up which DOM element belongs to which piece of data, leading to bugs and wasted re-renders.

**6. What is conditional rendering? Show one place you used it (example: the empty stack message).**
Conditional rendering means showing different UI depending on some condition, instead of always rendering the same thing. In the `StackPanel` component, if `stack.length === 0` it renders an empty-state message ("Your stack is empty."); otherwise it renders the actual list of added technologies.

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
The parent passes data down as props — for example, `App` passes each `tech` object and the `added` boolean into `TechCard`. To send something back up, the parent passes a *function* down as a prop (like `onAdd`), and the child calls that function — for example, `TechCard`'s button calls `onAdd(tech)`, which runs the `addToStack` function that actually lives in `App`.
