# 🏟️ Sportsbook

A modern and responsive sports betting UI built with **Next.js 15**, **React 19**, **Tailwind CSS 4**, and **TypeScript**. Includes real-time odds simulation, highlight animations, modular components, and full testing support.

---

## 📦 Tech Stack

- ⚡️ Next.js 15
- ⚛️ React 19
- 🎨 Tailwind CSS 4
- 🔒 TypeScript
- 🧪 Jest + Testing Library
- 🧹 ESLint for linting
- 🚀 pnpm for fast dependency management

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/sportsbook.git
cd sportsbook
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Run the development server

```bash
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000)

---

## 📜 Available Scripts

| Command      | Description                        |
| ------------ | ---------------------------------- |
| `pnpm dev`   | Run development server (Turbopack) |
| `pnpm build` | Build an app for production        |
| `pnpm start` | Start the production server        |
| `pnpm lint`  | Run ESLint for code linting        |
| `pnpm test`  | Run unit tests with Jest           |

---

## ✅ Features

- 🔁 Real-time odds update simulation
- 💡 Highlighted animations on change
- 🧩 Modular, reusable components
- 📱 Fully responsive layout
- 🧪 Unit-tested with Jest & Testing Library
- 🔒 Strictly typed with TypeScript

---

## 🧪 Testing

To run all tests:

```bash
pnpm test
```

Tests are colocated with their components. Example file structure:

```
src/components/ui/Button/index.test.tsx
src/components/SportMatch/hooks/useOddsUpdater.test.ts
```

---

## 📁 Project Structure

```
src/
│
├── components/
│   ├── ui/              # Shared UI components
│   ├── SportMatch/      # MatchCard, Odds buttons, logic
│
├── hooks/               # Custom hooks (e.g., useOddsUpdater)
├── pages/               # Next.js route pages
├── styles/              # Tailwind and global styles
```
