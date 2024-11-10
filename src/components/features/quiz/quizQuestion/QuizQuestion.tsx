import React from 'react';
import Checkbox from '../../../ui/formFields/Checkbox';

type QuizQuestionProps = {
  question: string;
  options: string[];
  correctAnswer:string;
  selectedOption: string;
  onSelectOption: (option: string) => void;
};

const QuizQuestion: React.FC<QuizQuestionProps> = ({ question, options, selectedOption, correctAnswer, onSelectOption }) => (
  <div className={'flex flex-col items-center w-full'}>
    <h2 className="text-xl font-semibold mb-4">{question}</h2>
    <div className="w-full md:max-w-[60%] space-y-2">
      {options.map((option, index) => (
        <div key={index} className={`flex items-center w-full mt-3 px-3 h-[56px] border-[1px] border-[#D9D9D9] rounded-[8px] ${ selectedOption === option ? selectedOption === correctAnswer ? 'border-[2px] border-[#06AF52]' : 'border-[2px] border-[#B92B5D]' :'' }`}>
          <Checkbox
            label={option}
            checked={selectedOption === option}
            setChecked={() => { if(selectedOption === '') {onSelectOption(option);}}}
          />
        </div>
      ))}
    </div>
  </div>
);

export default QuizQuestion;
