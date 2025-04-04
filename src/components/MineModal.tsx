type MineModal = {
  question: string;
  answers: string[];
  open: boolean;
};
export const MineModal = ({ question, answers, open }: MineModal) => {
  return (
    <dialog open={open}>
      <h2>Answer this question correctly or LOSE</h2>
      <h3>{question}</h3>
      <ol>
        {answers.map((answer) => {
          return (
            <li>
              <button>{answer}</button>
            </li>
          );
        })}
      </ol>
    </dialog>
  );
};
