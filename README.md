# 🏃‍♂️ React Infinite Runner

A fast-paced, physics-based infinite runner game built from scratch using **React 19** and **Vite**. Test your reflexes, dodge obstacles, and see how long you can survive as the game speed progressively increases!

![Game Preview](https://via.placeholder.com/800x400?text=Gameplay+Screenshot+Placeholder)
*(Replace this link with an actual screenshot of your game)*

## 🎮 Features

*   **Physics Engine**: Custom-built gravity and velocity simulation using React state (`useEffect` & `setInterval`).
*   **Procedural Obstacles**: Obstacles spawn and move continuously, ensuring no two runs are exactly the same.
*   **Dynamic Difficulty**: The game creates a challenge by increasing speed automatically as your score goes up.
*   **Collision Detection**: Real-time bounding-box collision detection to ensure precise hitboxes.
*   **Score Tracking**: Live scoring system that rewards survival time.

## 🛠️ Tech Stack

*   **[React](https://react.dev/)**: Component-based UI and state management.
*   **[Vite](https://vitejs.dev/)**: Next-generation frontend tooling for fast builds and HMR.
*   **CSS3**: Custom styling for game entities and animations.
*   **ESLint**: Code quality and best practices.

## 🚀 Getting Started

Follow these steps to get the game running locally on your machine.

### Prerequisites

Make sure you have **Node.js** installed on your system.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/runner-game.git
    cd runner-game
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Open in Browser:**
    Click the URL shown in the terminal (usually `http://localhost:5173`) to start playing!

## 🕹️ How to Play

1.  **Start the Game**: The game begins immediately (or upon refresh).
2.  **Jump**: Press the **`Spacebar`** to make the green cube jump.
3.  **Dodge**: Avoid the red obstacles moving towards you.
4.  **Survive**: The longer you run, the higher your score — and the faster the obstacles move!
5.  **Game Over**: If you crash, click the **Restart** button to try again.

## 📂 Project Structure

```bash
runner-game/
├── public/              # Static assets
├── src/
│   ├── App.css          # Game styling and animations
│   ├── App.jsx          # Main game logic (Physics, Rendering, State)
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
└── vite.config.js       # Vite configuration
```

## 🧠 What I Learned

This project was an experiment to build a game loop inside React's render cycle. Key takeaways include:
*   Managing **Intervals** and **Side Effects** in `useEffect`.
*   Optimizing state updates for 60FPS performance.
*   Implementing basic **AABB (Axis-Aligned Bounding Box)** collision detection logic manually.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
