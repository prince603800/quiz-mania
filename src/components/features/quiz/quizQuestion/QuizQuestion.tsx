// components/QuizQuestion.tsx
import React from 'react';
import Checkbox from '../../../ui/formFields/Checkbox';

type QuizQuestionProps = {
  question: string;
  options: string[];
  selectedOption: string;
  // eslint-disable-next-line no-unused-vars
  onSelectOption: (option: string) => void;
};

const QuizQuestion: React.FC<QuizQuestionProps> = ({ question, options, selectedOption, onSelectOption }) => (
  <div className="flex flex-col w-full ">
    <h2 className="text-xl font-semibold mb-4">{question}</h2>
    <div className="w-full max-w-[60%] space-y-2">
      {options.map((option, index) => (
        <div key={index} className="flex items-center w-full mt-3 px-3 h-[56px] border-[1px] border-[#D9D9D9] rounded-[8px]">
          <Checkbox
            label={option}
            checked={selectedOption === option}
            setChecked={() => onSelectOption(option)}
          />
        </div>
      ))}
    </div>
  </div>
);

export default QuizQuestion;
