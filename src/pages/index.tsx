import { type NextPage } from "next";
import Head from "next/head";
import { finalQuestions, initialQuestions, questions } from "~/questions";
import { QuestionSection } from "../components/QuestionSection";
import { AlternativeQuestions } from "~/components/AlternativeQuestions";
import { useEffect, useState } from "react";
import { Results } from "~/components/Results";
import { ActiveScore, Categories } from "~/helpers";

const Home: NextPage = () => {
  const [stage, setStage] = useState(-1);
  const [result, setResult] = useState<
    Partial<{
      country: string;
      email: string;
      ethnicity: string;
      name: string;
      primary_goal: string;
      better_memory: string;
      improve_creativity: string;
      improve_focus: string;
      planning_organising: string;
      problem_solving: string;
      surname_origin: string;
      score: ActiveScore;
    }>
  >({});
  const [quizScore, setQuizScore] = useState<ActiveScore>({
    [Categories.EXTRAVERSION]: 0,
    [Categories.AGREEABLENESS]: 0,
    [Categories.OPENNESS]: 0,
    [Categories.CONSCIENTIOUSNESS]: 0,
    [Categories.NEUROTICISM]: 0,
  });
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      console.log(result);
    }
    if (result.email) {
      handleSubmit();
    }
  }, [result]);

  const handleSubmit = () => {
    const body = JSON.stringify(result);
    void fetch("/api/post-results", {
      method: "POST",
      body,
    });
    void fetch("/api/send-email", {
      method: "POST",
      body,
    });
  };

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
          {stage === -1 && (
            <>
              <h2 className="text-5xl font-extrabold tracking-tight text-black sm:text-[5rem]">
                Welcome screen
              </h2>
              <div className="flex-col gap-4 sm:grid-cols-2 md:gap-8">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setStage((stage) => stage + 1);
                  }}
                  className="m-4 flex w-80 flex-col rounded-xl border border-black bg-white/10 p-6 hover:bg-white/20"
                >
                  <div className="text-lg">Start</div>
                </button>
              </div>
            </>
          )}
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
                  <option value="UE">United Arab Emirates</option>
                  <option value="UK">United Kingdom</option>
                  <option value="US">United States</option>
                  <optgroup label="Rest of countries">
                    <option value="DZ">Algeria</option>
                    <option value="AD">Andorra</option>
                    <option value="AO">Angola</option>
                    <option value="AI">Anguilla</option>
                    <option value="AG">Antigua &amp; Barbuda</option>
                    <option value="AR">Argentina</option>
                    <option value="AM">Armenia</option>
                    <option value="AW">Aruba</option>
                    <option value="AU">Australia</option>
                    <option value="AT">Austria</option>
                    <option value="AZ">Azerbaijan</option>
                    <option value="BS">Bahamas</option>
                    <option value="BH">Bahrain</option>
                    <option value="BD">Bangladesh</option>
                    <option value="BB">Barbados</option>
                    <option value="BY">Belarus</option>
                    <option value="BE">Belgium</option>
                    <option value="BZ">Belize</option>
                    <option value="BJ">Benin</option>
                    <option value="BM">Bermuda</option>
                    <option value="BT">Bhutan</option>
                    <option value="BO">Bolivia</option>
                    <option value="BA">Bosnia Herzegovina</option>
                    <option value="BW">Botswana</option>
                    <option value="BR">Brazil</option>
                    <option value="BN">Brunei</option>
                    <option value="BG">Bulgaria</option>
                    <option value="BF">Burkina Faso</option>
                    <option value="BI">Burundi</option>
                    <option value="KH">Cambodia</option>
                    <option value="CM">Cameroon</option>
                    <option value="CA">Canada</option>
                    <option value="CV">Cape Verde Islands</option>
                    <option value="KY">Cayman Islands</option>
                    <option value="CF">Central African Republic</option>
                    <option value="CL">Chile</option>
                    <option value="CN">China</option>
                    <option value="CO">Colombia</option>
                    <option value="KM">Comoros</option>
                    <option value="CG">Congo</option>
                    <option value="CK">Cook Islands</option>
                    <option value="CR">Costa Rica</option>
                    <option value="HR">Croatia</option>
                    <option value="CU">Cuba</option>
                    <option value="CY">Cyprus North</option>
                    <option value="CY">Cyprus South</option>
                    <option value="CZ">Czech Republic</option>
                    <option value="DK">Denmark</option>
                    <option value="DJ">Djibouti</option>
                    <option value="DM">Dominica</option>
                    <option value="DO">Dominican Republic</option>
                    <option value="EC">Ecuador</option>
                    <option value="EG">Egypt</option>
                    <option value="SV">El Salvador</option>
                    <option value="GQ">Equatorial Guinea</option>
                    <option value="ER">Eritrea</option>
                    <option value="EE">Estonia</option>
                    <option value="ET">Ethiopia</option>
                    <option value="FK">Falkland Islands</option>
                    <option value="FO">Faroe Islands</option>
                    <option value="FJ">Fiji</option>
                    <option value="FI">Finland</option>
                    <option value="FR">France</option>
                    <option value="GF">French Guiana</option>
                    <option value="PF">French Polynesia</option>
                    <option value="GA">Gabon</option>
                    <option value="GM">Gambia</option>
                    <option value="GE">Georgia</option>
                    <option value="DE">Germany</option>
                    <option value="GH">Ghana</option>
                    <option value="GI">Gibraltar</option>
                    <option value="GR">Greece</option>
                    <option value="GL">Greenland</option>
                    <option value="GD">Grenada</option>
                    <option value="GP">Guadeloupe</option>
                    <option value="GU">Guam</option>
                    <option value="GT">Guatemala</option>
                    <option value="GN">Guinea</option>
                    <option value="GW">Guinea - Bissau</option>
                    <option value="GY">Guyana</option>
                    <option value="HT">Haiti</option>
                    <option value="HN">Honduras</option>
                    <option value="HK">Hong Kong</option>
                    <option value="HU">Hungary</option>
                    <option value="IS">Iceland</option>
                    <option value="IN">India</option>
                    <option value="ID">Indonesia</option>
                    <option value="IR">Iran</option>
                    <option value="IQ">Iraq</option>
                    <option value="IE">Ireland</option>
                    <option value="IL">Israel</option>
                    <option value="IT">Italy</option>
                    <option value="JM">Jamaica</option>
                    <option value="JP">Japan</option>
                    <option value="JO">Jordan</option>
                    <option value="KZ">Kazakhstan</option>
                    <option value="KE">Kenya</option>
                    <option value="KI">Kiribati</option>
                    <option value="KP">Korea North</option>
                    <option value="KR">Korea South</option>
                    <option value="KW">Kuwait</option>
                    <option value="KG">Kyrgyzstan</option>
                    <option value="LA">Laos</option>
                    <option value="LV">Latvia</option>
                    <option value="LB">Lebanon</option>
                    <option value="LS">Lesotho</option>
                    <option value="LR">Liberia</option>
                    <option value="LY">Libya</option>
                    <option value="LI">Liechtenstein</option>
                    <option value="LT">Lithuania</option>
                    <option value="LU">Luxembourg</option>
                    <option value="MO">Macao</option>
                    <option value="MK">Macedonia</option>
                    <option value="MG">Madagascar</option>
                    <option value="MW">Malawi</option>
                    <option value="MY">Malaysia</option>
                    <option value="MV">Maldives</option>
                    <option value="ML">Mali</option>
                    <option value="MT">Malta</option>
                    <option value="MH">Marshall Islands</option>
                    <option value="MQ">Martinique</option>
                    <option value="MR">Mauritania</option>
                    <option value="YT">Mayotte</option>
                    <option value="MX">Mexico</option>
                    <option value="FM">Micronesia</option>
                    <option value="MD">Moldova</option>
                    <option value="MC">Monaco</option>
                    <option value="MN">Mongolia</option>
                    <option value="MS">Montserrat</option>
                    <option value="MA">Morocco</option>
                    <option value="MZ">Mozambique</option>
                    <option value="MN">Myanmar</option>
                    <option value="NA">Namibia</option>
                    <option value="NR">Nauru</option>
                    <option value="NP">Nepal</option>
                    <option value="NL">Netherlands</option>
                    <option value="NC">New Caledonia</option>
                    <option value="NZ">New Zealand</option>
                    <option value="NI">Nicaragua</option>
                    <option value="NE">Niger</option>
                    <option value="NG">Nigeria</option>
                    <option value="NU">Niue</option>
                    <option value="NF">Norfolk Islands</option>
                    <option value="NP">Northern Marianas</option>
                    <option value="NO">Norway</option>
                    <option value="OM">Oman</option>
                    <option value="PW">Palau</option>
                    <option value="PA">Panama</option>
                    <option value="PG">Papua New Guinea</option>
                    <option value="PY">Paraguay</option>
                    <option value="PE">Peru</option>
                    <option value="PH">Philippines</option>
                    <option value="PL">Poland</option>
                    <option value="PT">Portugal</option>
                    <option value="PR">Puerto Rico</option>
                    <option value="QA">Qatar</option>
                    <option value="RE">Reunion</option>
                    <option value="RO">Romania</option>
                    <option value="RU">Russia</option>
                    <option value="RW">Rwanda</option>
                    <option value="SM">San Marino</option>
                    <option value="ST">Sao Tome &amp; Principe</option>
                    <option value="SA">Saudi Arabia</option>
                    <option value="SN">Senegal</option>
                    <option value="CS">Serbia</option>
                    <option value="SC">Seychelles</option>
                    <option value="SL">Sierra Leone</option>
                    <option value="SG">Singapore</option>
                    <option value="SK">Slovak Republic</option>
                    <option value="SI">Slovenia</option>
                    <option value="SB">Solomon Islands</option>
                    <option value="SO">Somalia</option>
                    <option value="ZA">South Africa</option>
                    <option value="ES">Spain</option>
                    <option value="LK">Sri Lanka</option>
                    <option value="SH">St. Helena</option>
                    <option value="KN">St. Kitts</option>
                    <option value="SC">St. Lucia</option>
                    <option value="SD">Sudan</option>
                    <option value="SR">Suriname</option>
                    <option value="SZ">Swaziland</option>
                    <option value="SE">Sweden</option>
                    <option value="CH">Switzerland</option>
                    <option value="SI">Syria</option>
                    <option value="TW">Taiwan</option>
                    <option value="TJ">Tajikstan</option>
                    <option value="TH">Thailand</option>
                    <option value="TG">Togo</option>
                    <option value="TO">Tonga</option>
                    <option value="TT">Trinidad &amp; Tobago</option>
                    <option value="TN">Tunisia</option>
                    <option value="TR">Turkey</option>
                    <option value="TM">Turkmenistan</option>
                    <option value="TM">Turkmenistan</option>
                    <option value="TC">Turks &amp; Caicos Islands</option>
                    <option value="TV">Tuvalu</option>
                    <option value="UG">Uganda</option>

                    <option value="UA">Ukraine</option>

                    <option value="UY">Uruguay</option>

                    <option value="UZ">Uzbekistan</option>
                    <option value="VU">Vanuatu</option>
                    <option value="VA">Vatican City</option>
                    <option value="VE">Venezuela</option>
                    <option value="VN">Vietnam</option>
                    <option value="VG">Virgin Islands - British</option>
                    <option value="VI">Virgin Islands - US</option>
                    <option value="WF">Wallis &amp; Futuna</option>
                    <option value="YE">Yemen (North)</option>
                    <option value="YE">Yemen (South)</option>
                    <option value="ZM">Zambia</option>
                    <option value="ZW">Zimbabwe</option>
                  </optgroup>
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
                setQuizScore(score);
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
          {stage === 6 && (
            <>
              <h2 className="text-5xl font-extrabold tracking-tight text-black sm:text-[5rem]">
                What’s your Email?
              </h2>
              <div className="flex-col gap-4 sm:grid-cols-2 md:gap-8">
                <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mr-2 border border-solid border-black p-4"
                />
                <button
                  className="border border-solid border-black p-4"
                  onClick={(e) => {
                    e.preventDefault();
                    setResult((result) => ({ ...result, email }));
                    setStage((stage) => stage + 1);
                  }}
                >
                  Go!
                </button>
              </div>
            </>
          )}
          {stage === 7 && (
            <>
              <h2 className="text-5xl font-extrabold tracking-tight text-black sm:text-[5rem]">
                Results
              </h2>
              <div
                style={{
                  width: 500,
                  height: 500,
                }}
              >
                <Results data={quizScore} />
              </div>
            </>
          )}
        </div>
      </main>
    </>
  );
};

export default Home;
