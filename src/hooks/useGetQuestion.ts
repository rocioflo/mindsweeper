import { useState } from "react";
import { getQuestion } from "../trivialAPI";

export const useGetQuestion = () => {
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState([""]);
  const [correctAnswer, setCorrectAnswer] = useState("");

  const getTriviaQuestion = async () => {
    const { response } = await getQuestion();

    setQuestion(response.results[0].question);
    setAnswers([
      response.results[0].correct_answer,
      ...response.results[0].incorrect_answers,
    ]);
    setCorrectAnswer(response.results[0].correct_answer);
  };

  return { question, answers, correctAnswer, getTriviaQuestion };
};
