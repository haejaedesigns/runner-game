import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [playerY, setPlayerY] = useState(0);
  const [velocityY, setVelocityY] = useState(0);
  const [ obstacles, setObstacles] = useState([
    {id: 1, x: 900},
    {id: 2, x: 1200},
    {id: 3, x: 1600},
  ]);
  const [ score, setScore ] = useState(0);
  const [ collide, setCollide ] = useState(false);

  const handleKeyDown = (e) => {
    if (e.code === "Space" && playerY === 0) {
      setVelocityY(18);
    }
  }

  const restartGame = () => {
    setObstacles([
    { id: 1, x: 900 },
    { id: 2, x: 1200 },
    { id: 3, x: 1600 },
  ]);
    setScore(0);
    setCollide(false);
    setVelocityY(0);
    setPlayerY(0);
  }

  const speed = Math.min(25, 10 + Math.floor(score / 5));

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    }
  }, [])

  useEffect(() => {
    if (collide) return;

    const physics = setInterval(() => {
      setPlayerY((y) => {
        let newY = y + velocityY;
        if (newY <= 0) return 0;
        return newY;
      });

      setVelocityY((v) => v - 1);
    }, 30);

    return () => clearInterval(physics);
  }, [collide, velocityY])

  useEffect(() => {
    if (collide) return;
    
    const timer = setInterval(() => {
      setObstacles((prev) => 
        prev.map((obs) => ({
          ...obs,
          x: obs.x > -10 ? obs.x - speed : 900 + Math.random() * 400,
        })))
    }, 50)
    return () => clearInterval(timer);
  }, [collide, speed])

  useEffect(() => {
  if (collide) return;

  obstacles.forEach((obs) => {
    if (
      obs.x < 90 &&
      obs.x + 30 > 50 &&
      playerY < 60
    ) {
      setCollide(true);
    }
  });
}, [obstacles, collide]);

  useEffect(() => {
    if (collide) return;
    
    const scoreTimer = setInterval(() => {
      setScore((prev) => prev + 1)
    }, 500)
    return () => clearInterval(scoreTimer);
  }, [collide])

    return (
        <div className="game">
          <div className="score">Score: {score}</div>
          <div className="player" style={{ bottom: `${playerY}px` }}></div>
          {obstacles.map((obs) => (
            <div  className="obstacle" style={{ left: `${obs.x}px` }} />
          ))}
          {collide && 
            <div className="game-over">
              <div>
                <p>Game Over</p>
                <button onClick={restartGame}>Restart</button>
              </div>
            </div>
          }
        </div>
    );
}

export default App;