type QuestionDTO = {
  response_code: number;
  results: [
    {
      type: string;
      difficulty: string;
      category: string;
      question: string;
      correct_answer: string;
      incorrect_answers: string[];
    }
  ];
};

export const getQuestion = async () => {
  const response: QuestionDTO = await fetch(
    "https://opentdb.com/api.php?amount=1"
  ).then((data) => data.json());

  return { response };
};
