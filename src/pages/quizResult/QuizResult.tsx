// screens/QuizResultScreen.tsx
import React from 'react';
import Button from '../../components/ui/buttons/Button';
import { sadImage, successImage } from '../../assets/images';

const QuizResultScreen: React.FC<{
  score?: number;
  total?: number;
  onRestart?: () => void;
}> = ({ score = 30, total, onRestart }) => {
  const scoreStatus = score > 40 ? 'pass' : 'fail';
  return (
    <div className="flex flex-col items-center justify-center w-[60%] m-auto">
      <img
        className="mt-3"
        src={scoreStatus === 'pass' ? successImage : sadImage}
      />

      {scoreStatus === 'fail' && (
        <p className="text-[14px] text-secondary font-semibold ">
          You successfully completed the Quiz but you need to
        </p>
      )}

      <h1 className="text-[33px] text-light tracking-[1rem]">
        {scoreStatus === 'pass' ? 'CONGRATULATION' : 'KEEP'}
      </h1>
      
      {scoreStatus === 'fail' && (
        <h1 className="text-[33px] text-light tracking-[1rem]">PRACTICING!</h1>
      )}

      {scoreStatus === 'pass' && (
        <p className="text-[20px] text-secondary font-semibold ">
          You successfully completed the Quiz and holds
        </p>
      )}

      <div className='h-[219px] w-[219px] rounded-[50%] flex flex-col justify-center items-center border-[0.85px] border-[#D2829A] mt-[-5px]'>
        <p className="text-[26px] font-light">Your Score</p>
        <h1 className="text-[#06AF52] text-[40px] font-bold">83%</h1>

        {scoreStatus === 'pass' && (
          <h3 className="text-[40px] font-semibold text-[#373052] ">
            Great Job!
          </h3>
        )}
      </div>

      <div className="flex flex-col items-center justify-center mt-[1rem] h-[123px] w-[442px] border-[1px] border-[#D9D9D9] rounded-[8px]">
        <h4 className="text-[24px] font-semibold">Out of 10 question</h4>
        <div className="flex mt-1 text-[20px]">
          <p className="mr-3">
            <span className="text-[#06AF52] font-black">7</span> Correct
          </p>
          <p className="mr-3">
            <span className="text-[#AF0606] font-black">2</span> Incorrect
          </p>
          <p>
            <span className="text-[#8D8D8D] font-black">1</span> Not answered
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuizResultScreen;
