import { type NextPage } from "next";
import Head from "next/head";
import { finalQuestions, initialQuestions, questions } from "~/questions";
import { QuestionSection } from "../components/QuestionSection";
import { AlternativeQuestions } from "~/components/AlternativeQuestions";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const [stage, setStage] = useState(0);
  const [result, setResult] = useState<object>({});
  const [name, setName] = useState<string>("");

  useEffect(() => {
    console.log(result);
  }, [result]);

  return (
    <>
      <Head>
        <title>Calibration Quiz</title>
        <meta name="description" content="Simple Quiz template" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center text-black">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            Myra <span className="text-[hsl(280,100%,70%)]">Empathy</span>{" "}
            Calibration
          </h1>
          {stage === 0 && (
            <AlternativeQuestions
              questions={initialQuestions}
              currentResult={result}
              onLastQuestionAnswered={(result) => {
                setResult(result);
                setStage((stage) => stage + 1);
              }}
            />
          )}
          {stage === 1 && (
            <>
              <h2 className="text-5xl font-extrabold tracking-tight text-black sm:text-[5rem]">
                What’s your Country of Residence?
              </h2>
              <div className="flex-col gap-4 sm:grid-cols-2 md:gap-8">
                <select
                  onChange={(e) => {
                    setResult((result) => ({
                      ...result,
                      country: e.target.value,
                    }));
                    setStage((stage) => stage + 1);
                  }}
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-black dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                >
                  <option>Choose a country</option>
                  <option value="US">United States</option>
                  <option value="UK">United Kingdom</option>
                  <option value="UE">United Arab Emirates</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                  <option value="IE">Ireland</option>
                </select>
              </div>
            </>
          )}
          {stage === 2 && (
            <>
              <h2 className="text-5xl font-extrabold tracking-tight text-black sm:text-[5rem]">
                Take this 1-2 minute test to personalise your skill level.
              </h2>
              <div className="flex-col gap-4 sm:grid-cols-2 md:gap-8">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    console.log("they clicked next!!!");
                    setStage((stage) => stage + 1);
                  }}
                  className="m-4 flex w-80 flex-col rounded-xl border border-black bg-white/10 p-6 hover:bg-white/20"
                >
                  <div className="text-lg">Start</div>
                </button>
              </div>
            </>
          )}
          {stage === 3 && (
            <QuestionSection
              questions={questions}
              onLastQuestionAnswered={(score) => {
                setResult((result) => ({ ...result, score }));
                setStage((stage) => stage + 1);
              }}
            />
          )}
          {stage === 4 && (
            <>
              <h2 className="text-5xl font-extrabold tracking-tight text-black sm:text-[5rem]">
                What’s your Name?
              </h2>
              <div className="flex-col gap-4 sm:grid-cols-2 md:gap-8">
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mr-2 border border-solid border-black p-4"
                />
                <button
                  className="border border-solid border-black p-4"
                  onClick={(e) => {
                    e.preventDefault();
                    setResult((result) => ({ ...result, name }));
                    setStage((stage) => stage + 1);
                  }}
                >
                  Go!
                </button>
              </div>
            </>
          )}
          {stage === 5 && (
            <AlternativeQuestions
              questions={finalQuestions}
              currentResult={result}
              onLastQuestionAnswered={(result) => {
                setResult(result);
                setStage((stage) => stage + 1);
              }}
            />
          )}
          {stage === 6 && <>Everything done </>}
        </div>
      </main>
    </>
  );
};

export default Home;
