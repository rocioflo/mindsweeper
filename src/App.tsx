import { useState } from "react";
import "./App.css";

const showMine = "mine";
const showSafe = "safe";

function App() {
  const [isMine] = useState([
    false,
    true,
    false,
    false,
    true,
    false,
    false,
    true,
    false,
  ]);
  const [reveal, setReveal] = useState(["", "", "", "", "", "", "", "", ""]);
  const [message, setMessage] = useState("");

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

  console.log(reveal);

  return (
    <main>
      <h1>MindSweeper</h1>
      <table>
        <tbody>
          <tr>
            <td>
              <button onClick={() => findMine(isMine[0], 0)}>
                {isMine[0]}
                {reveal[0]}
              </button>
            </td>
            <td>
              <button onClick={() => findMine(isMine[1], 1)}>
                {isMine[1]}
                {reveal[1]}
              </button>
            </td>
            <td>
              <button onClick={() => findMine(isMine[2], 2)}>
                {isMine[2]}
                {reveal[2]}
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={() => findMine(isMine[3], 3)}>
                {isMine[3]}
                {reveal[3]}
              </button>
            </td>
            <td>
              <button onClick={() => findMine(isMine[4], 4)}>
                {isMine[4]}
                {reveal[4]}
              </button>
            </td>
            <td>
              <button onClick={() => findMine(isMine[5], 5)}>
                {isMine[5]}
                {reveal[5]}
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={() => findMine(isMine[6], 6)}>
                {isMine[6]}
                {reveal[6]}
              </button>
            </td>
            <td>
              <button onClick={() => findMine(isMine[7], 7)}>
                {isMine[7]}
                {reveal[7]}
              </button>
            </td>
            <td>
              <button onClick={() => findMine(isMine[8], 8)}>
                {isMine[8]}
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
