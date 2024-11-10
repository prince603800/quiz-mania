import React from 'react';
import Button from '../../components/ui/buttons/Button';
import { sadImage, successImage } from '../../assets/images';

const QuizResultScreen: React.FC<{
  score: number;
  skippedQuestions: number;
  totalQuestions: number;
  onRestart?: () => void;
}> = ({ score = 0, totalQuestions = 0, skippedQuestions, onRestart }) => {
  const totalScorePercentage = (score / totalQuestions) * 100;
  const isPassed = totalScorePercentage > 39;
  const correctAnswers = score;
  const incorrectAnswers = totalQuestions - score - skippedQuestions;
  const unanswered = skippedQuestions;

  const PassMessage = () => (
    <p className="text-[20px] text-secondary font-semibold">
      You successfully completed the Quiz and hold
    </p>
  );

  const FailMessage = () => (
    <p className="text-[14px] mt-[2rem] mb-3 md-0 md:mt-0 text-secondary font-semibold">
      You successfully completed the Quiz but you need to
    </p>
  );

  const ScoreBox = () => (
    <div
      className={`h-[219px] w-[219px] ${
        !isPassed ? 'rounded-[50%] border-[0.85px] border-[#D2829A]' : ''
      } flex flex-col justify-center items-center mt-5  md:mt-[-5px]`}
    >
      <p className="text-[26px] font-light">Your Score</p>
      <h1 className="text-[#06AF52] text-[40px] font-bold">
        {totalScorePercentage.toFixed(2)}%
      </h1>
      {isPassed && (
        <h3 className="text-[40px] font-semibold text-[#373052]">Great Job!</h3>
      )}
    </div>
  );

  return (
    <div className="flex flex-col items-center justify-center w-full md:w-[60%] mt-[3rem] md:mt-1 m-auto">
      <img
        className="mt-3 md:mt-0"
        src={isPassed ? successImage : sadImage}
        alt={isPassed ? 'Success' : 'Sad'}
      />

      {!isPassed && <FailMessage />}

      <h1 className="text-[33px]  tracking-[1rem] font-light">
        {isPassed ? 'CONGRATULATION' : 'KEEP'}
      </h1>

      {!isPassed && (
        <h1 className="text-[33px]  font-light tracking-[1rem]">PRACTICING!</h1>
      )}

      {isPassed && <PassMessage/>}

      <ScoreBox />

      <div className="flex flex-col items-center justify-center mt-[1rem] h-[123px] w-full w-[392px] md:w-[442px] border-[1px] border-[#D9D9D9] rounded-[8px]">
        <h4 className="text-[24px] font-semibold">
          Out of {totalQuestions} question
        </h4>
        <div className="flex mt-1 text-[20px]">
          <p className="mr-3">
            <span className="text-[#06AF52] font-black">{correctAnswers}</span> Correct
          </p>
          <p className="mr-3">
            <span className="text-[#AF0606] font-black">
              {incorrectAnswers}
            </span>{' '}
            Incorrect
          </p>
          <p>
            <span className="text-[#8D8D8D] font-black">{unanswered}</span> Not answered
          </p>
        </div>
      </div>

      <Button variant="secondary" onClick={onRestart} className="mt-3">
        Retake Quiz
      </Button>
    </div>
  );
};

export default QuizResultScreen;
