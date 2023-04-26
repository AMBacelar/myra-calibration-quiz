import { useState, type FunctionComponent, useEffect, useRef } from "react";
import {
  type Question,
  type ActiveScore,
  getNextQuestion,
  initialScore,
  updateScore,
} from "~/helpers";

export const QuestionSection: FunctionComponent<{
  questions: Question[];
  onLastQuestionAnswered: () => void;
}> = ({ questions, onLastQuestionAnswered }) => {
  const [score, setScore] = useState<ActiveScore>(initialScore);
  const [questionIndex, setQuestionIndex] = useState<number>(-1);
  const [question, setQuestion] = useState<Question>();
  const calledOnce = useRef(false);
  useEffect(() => {
    if (calledOnce.current) {
      return;
    }
    const firstQuestionPayload = getNextQuestion(initialScore, -1, questions);
    if (!firstQuestionPayload) {
      console.log("should never happen");
      onLastQuestionAnswered();
    } else {
      setQuestion(firstQuestionPayload.nextQuestion);
      setQuestionIndex(firstQuestionPayload.nextQuestionIndex);
      calledOnce.current = true;
    }
  }, []);

  const callGetNextQuestion = () => {
    const nextQuestionPayload = getNextQuestion(
      score,
      questionIndex,
      questions
    );
    if (!nextQuestionPayload) {
      console.log("We have asked all the available questions");
      onLastQuestionAnswered();
    } else {
      setQuestion(nextQuestionPayload.nextQuestion);
      setQuestionIndex(nextQuestionPayload.nextQuestionIndex);
    }
  };

  return (
    <>
      <h2 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
        {question?.text}
      </h2>
      <div className="flex-col gap-4 sm:grid-cols-2 md:gap-8">
        {question?.options.map((option, i) => (
          <Option
            key={i}
            index={i}
            text={option.text}
            onClick={() => {
              setScore(updateScore(score, option.payload));
              callGetNextQuestion();
            }}
          />
        ))}
      </div>
    </>
  );
};

const Option: FunctionComponent<{
  index: number;
  text: string;
  onClick: () => void;
}> = ({ index, text, onClick }) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      className="m-4 flex w-80 flex-col rounded-xl bg-white/10 p-6 text-white hover:bg-white/20"
    >
      <h3 className="text-2xl font-bold">Option {index + 1} →</h3>
      <div className="text-lg">{text}</div>
    </button>
  );
};
