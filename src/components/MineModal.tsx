type MineModal = {
  question: string;
  answers: string[];
  open: boolean;
  chooseTrivialOption: (answer: string) => void;
};
export const MineModal = ({
  question,
  answers,
  open,
  chooseTrivialOption,
}: MineModal) => {
  return (
    <dialog open={open}>
      <h2>Answer this question correctly or LOSE</h2>
      <h3>{question}</h3>
      <ol>
        {answers.map((answer) => {
          return (
            <li key={answer}>
              <button onClick={() => chooseTrivialOption(answer)}>
                {answer}
              </button>
            </li>
          );
        })}
      </ol>
    </dialog>
  );
};
