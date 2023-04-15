import { type NextPage } from "next";
import Head from "next/head";
import { useState, type FunctionComponent, useEffect, useRef } from "react";
import {
  type Question,
  type ActiveScore,
  getNextQuestion,
  initialScore,
  updateScore,
} from "~/helpers";
import { questions } from "~/questions";

const QuestionSection = () => {
  const [score, setScore] = useState<ActiveScore>(initialScore);
  const [pastQuestions, setPastQuestions] = useState<number[]>([]);
  const [question, setQuestion] = useState<Question>();
  const calledOnce = useRef(false);
  useEffect(() => {
    if (calledOnce.current) {
      return;
    }
    const firstQuestionPayload = getNextQuestion(initialScore, [], questions);
    setQuestion(firstQuestionPayload.nextQuestion);
    setPastQuestions(firstQuestionPayload.pastQuestions);
    calledOnce.current = true;
  }, []);

  const callGetNextQuestion = () => {
    const nextQuestionPayload = getNextQuestion(
      score,
      pastQuestions,
      questions
    );
    setQuestion(nextQuestionPayload.nextQuestion);
    setPastQuestions(nextQuestionPayload.pastQuestions);
  };

  return (
    <>
      <h2 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
        {question?.text}
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
        {question?.options.map((option, i) => (
          <Option
            key={i}
            index={i}
            text={option.text}
            onClick={() => {
              console.log("yolo!", option.payload);
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
      className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
    >
      <h3 className="text-2xl font-bold">Option {index + 1} →</h3>
      <div className="text-lg">{text}</div>
    </button>
  );
};

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Calibration Quiz</title>
        <meta name="description" content="Simple Quiz template" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Myra <span className="text-[hsl(280,100%,70%)]">Empathy</span>{" "}
            Calibration
          </h1>
          <QuestionSection />
        </div>
      </main>
    </>
  );
};

export default Home;
