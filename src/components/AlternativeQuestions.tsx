import { useState, type FunctionComponent, useEffect, useRef } from "react";
import { getNextQuestion } from "~/helpers";
import { type AlternativeQuestion } from "~/questions";

export const AlternativeQuestions: FunctionComponent<{
  questions: AlternativeQuestion[];
  onLastQuestionAnswered: (result: object) => void;
  currentResult: object;
}> = ({ questions, onLastQuestionAnswered, currentResult }) => {
  const [result, setResult] = useState(currentResult);
  const [questionIndex, setQuestionIndex] = useState<number>(-1);
  const [question, setQuestion] = useState<AlternativeQuestion>();

  const calledOnce = useRef(false);
  useEffect(() => {
    if (calledOnce.current) {
      return;
    }
    const firstQuestionPayload = getNextQuestion(-1, questions);
    if (!firstQuestionPayload) {
      onLastQuestionAnswered(result);
    } else {
      setQuestion(firstQuestionPayload.nextQuestion);
      setQuestionIndex(firstQuestionPayload.nextQuestionIndex);
      calledOnce.current = true;
    }
  }, [onLastQuestionAnswered, questions, result]);

  useEffect(() => {
    callGetNextQuestion();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result]);

  const callGetNextQuestion = () => {
    const nextQuestionPayload = getNextQuestion(questionIndex, questions);
    if (!nextQuestionPayload) {
      onLastQuestionAnswered(result);
    } else {
      setQuestion(nextQuestionPayload.nextQuestion);
      setQuestionIndex(nextQuestionPayload.nextQuestionIndex);
    }
  };

  if (!question) {
    return null;
  }
  return (
    <>
      <h2 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
        {question.text}
      </h2>
      <div
        className={`flex-${
          question.direction === "row" ? "row" : "col"
        } gap-4 sm:grid-cols-2 md:gap-8`}
      >
        {question.options.map((option, i) => (
          <Option
            key={i}
            text={option.text}
            onClick={() => {
              setResult((result) => ({
                ...result,
                [question.key]: option.key,
              }));
            }}
          />
        ))}
      </div>
    </>
  );
};

const Option: FunctionComponent<{
  text: string;
  onClick: () => void;
}> = ({ text, onClick }) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      className="m-4 flex w-80 flex-col rounded-xl bg-white/10 p-6 text-white hover:bg-white/20"
    >
      <div className="text-lg">{text}</div>
    </button>
  );
};
