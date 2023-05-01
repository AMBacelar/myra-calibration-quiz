import Image from "next/image";
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
  onLastQuestionAnswered: (score: ActiveScore) => void;
}> = ({ questions, onLastQuestionAnswered }) => {
  const [score, setScore] = useState<ActiveScore>(initialScore);
  const [questionIndex, setQuestionIndex] = useState<number>(-1);
  const [question, setQuestion] = useState<Question>();
  const calledOnce = useRef(false);
  useEffect(() => {
    if (calledOnce.current) {
      return;
    }
    const firstQuestionPayload = getNextQuestion(-1, questions);
    if (!firstQuestionPayload) {
      console.log("should never happen");
      onLastQuestionAnswered(score);
    } else {
      setQuestion(firstQuestionPayload.nextQuestion);
      setQuestionIndex(firstQuestionPayload.nextQuestionIndex);
      calledOnce.current = true;
    }
  }, [onLastQuestionAnswered, questions, score]);

  const callGetNextQuestion = () => {
    const nextQuestionPayload = getNextQuestion(questionIndex, questions);
    if (!nextQuestionPayload) {
      console.log("We have asked all the available questions");
      onLastQuestionAnswered(score);
    } else {
      setQuestion(nextQuestionPayload.nextQuestion);
      setQuestionIndex(nextQuestionPayload.nextQuestionIndex);
    }
  };

  useEffect(() => {
    callGetNextQuestion();
  }, [score]);

  return (
    <>
      <h2 className="text-lg font-extrabold tracking-tight sm:text-[5rem]">
        {question?.text}
      </h2>
      {question?.image && (
        <Image
          width={640}
          height={360}
          src={question.image}
          alt={question.text}
        />
      )}
      <div
        className={`flex${
          question?.direction === "row" ? "" : "-col"
        } gap-4 sm:grid-cols-2 md:gap-8`}
      >
        {question?.options.map((option, i) => (
          <Option
            key={i}
            index={i}
            text={option.text}
            onClick={() => {
              setScore(updateScore(score, option.payload));
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
}> = ({ text, onClick }) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      className="m-4 flex w-80 flex-col rounded-xl border border-black bg-white/10 p-6 hover:bg-white/20"
    >
      <div className="text-lg">{text}</div>
    </button>
  );
};
