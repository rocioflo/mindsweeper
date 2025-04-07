import { useEffect, useState } from "react";
import "./App.css";
import { MineModal } from "./components/MineModal";
import { useGetQuestion } from "./hooks/useGetQuestion";

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
  const [isGameHalted, setIsGameHalted] = useState(false);
  const [message, setMessage] = useState("");
  const { question, answers, getTriviaQuestion, correctAnswer } =
    useGetQuestion();
  const isGameDisabled = isGameHalted;

  const startGame = () => {
    setReveal(["", "", "", "", "", "", "", "", ""]);
    setIsGameHalted(false);
    setMessage("");

    const shuffledMines = mines.sort(() => 0.5 - Math.random());

    setMines(shuffledMines);
  };

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
      setIsGameHalted(true);
      getTriviaQuestion();
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

  const chooseTrivialOption = (answer: string) => {
    if (answer === correctAnswer) {
      setIsGameHalted(false);
    } else {
      setMessage("You lost!");
    }
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
      <MineModal
        question={question}
        answers={answers}
        open={isGameDisabled && message === ""}
        chooseTrivialOption={chooseTrivialOption}
      />
      <table>
        <tbody>
          <tr>
            <td>
              <button
                onClick={() => findMine(mines[0], 0)}
                disabled={isGameDisabled}
                className="gameCell"
              >
                {mines[0]}
                {reveal[0]}
              </button>
            </td>
            <td>
              <button
                onClick={() => findMine(mines[1], 1)}
                disabled={isGameDisabled}
                className="gameCell"
              >
                {mines[1]}
                {reveal[1]}
              </button>
            </td>
            <td>
              <button
                onClick={() => findMine(mines[2], 2)}
                disabled={isGameDisabled}
                className="gameCell"
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
                className="gameCell"
              >
                {mines[3]}
                {reveal[3]}
              </button>
            </td>
            <td>
              <button
                onClick={() => findMine(mines[4], 4)}
                disabled={isGameDisabled}
                className="gameCell"
              >
                {mines[4]}
                {reveal[4]}
              </button>
            </td>
            <td>
              <button
                onClick={() => findMine(mines[5], 5)}
                disabled={isGameDisabled}
                className="gameCell"
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
                className="gameCell"
              >
                {mines[6]}
                {reveal[6]}
              </button>
            </td>
            <td>
              <button
                onClick={() => findMine(mines[7], 7)}
                disabled={isGameDisabled}
                className="gameCell"
              >
                {mines[7]}
                {reveal[7]}
              </button>
            </td>
            <td>
              <button
                onClick={() => findMine(mines[8], 8)}
                disabled={isGameDisabled}
                className="gameCell"
              >
                {mines[8]}
                {reveal[8]}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <p>{message}</p>

      <footer>
        <a href="https://www.flaticon.com/free-icons/mine" title="mine icons">
          Mine icons created by Creaticca Creative Agency - Flaticon
        </a>
        <a
          href="https://www.flaticon.com/free-icons/security"
          title="security icons"
        >
          Security icons created by Anggara - Flaticon
        </a>
        <a href="https://opentdb.com/api_config.php" title="Trivia Database">
          Trivial API by the amazing Open Trivia Database
        </a>
      </footer>
    </main>
  );
}

export default App;
