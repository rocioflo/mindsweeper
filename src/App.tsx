import { useEffect, useState } from "react";
import "./App.css";

const showMine = "mine";
const showSafe = "safe";

function App() {
  const [mines, setMines] = useState([
    true,
    true,
    true,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [reveal, setReveal] = useState(["", "", "", "", "", "", "", "", ""]);
  const [message, setMessage] = useState("");
  const isGameDisabled = message === "You lost!";

  const findMine = (isMine: boolean, mineIndex: number) => {
    if (isMine) {
      const newReveal = reveal.map((item, index) => {
        if (index === mineIndex) {
          return (item = showMine);
        } else {
          return item;
        }
      });

      setReveal(newReveal);
      setMessage("You lost!");
    } else {
      const newReveal = reveal.map((item, index) => {
        if (index === mineIndex) {
          return (item = showSafe);
        } else {
          return item;
        }
      });

      setReveal(newReveal);
    }
  };

  const startGame = () => {
    setReveal(["", "", "", "", "", "", "", "", ""]);
    setMessage("");

    const shuffledMines = mines.sort(() => 0.5 - Math.random());

    setMines(shuffledMines);
  };

  useEffect(() => {
    startGame();
  }, []);

  return (
    <main>
      <h1>MindSweeper</h1>
      <button className="startGame" onClick={startGame}>
        Start game!
      </button>
      <table>
        <tbody>
          <tr>
            <td>
              <button
                onClick={() => findMine(mines[0], 0)}
                disabled={isGameDisabled}
              >
                {mines[0]}
                {reveal[0]}
              </button>
            </td>
            <td>
              <button
                onClick={() => findMine(mines[1], 1)}
                disabled={isGameDisabled}
              >
                {mines[1]}
                {reveal[1]}
              </button>
            </td>
            <td>
              <button
                onClick={() => findMine(mines[2], 2)}
                disabled={isGameDisabled}
              >
                {mines[2]}
                {reveal[2]}
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button
                onClick={() => findMine(mines[3], 3)}
                disabled={isGameDisabled}
              >
                {mines[3]}
                {reveal[3]}
              </button>
            </td>
            <td>
              <button
                onClick={() => findMine(mines[4], 4)}
                disabled={isGameDisabled}
              >
                {mines[4]}
                {reveal[4]}
              </button>
            </td>
            <td>
              <button
                onClick={() => findMine(mines[5], 5)}
                disabled={isGameDisabled}
              >
                {mines[5]}
                {reveal[5]}
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button
                onClick={() => findMine(mines[6], 6)}
                disabled={isGameDisabled}
              >
                {mines[6]}
                {reveal[6]}
              </button>
            </td>
            <td>
              <button
                onClick={() => findMine(mines[7], 7)}
                disabled={isGameDisabled}
              >
                {mines[7]}
                {reveal[7]}
              </button>
            </td>
            <td>
              <button
                onClick={() => findMine(mines[8], 8)}
                disabled={isGameDisabled}
              >
                {mines[8]}
                {reveal[8]}
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <p>{message}</p>
      <a href="https://www.flaticon.com/free-icons/mine" title="mine icons">
        Mine icons created by Creaticca Creative Agency - Flaticon
      </a>
    </main>
  );
}

export default App;
