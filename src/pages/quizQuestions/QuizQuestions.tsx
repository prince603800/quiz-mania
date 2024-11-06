import React, { useState } from 'react';
import QuizQuestion from '../../components/features/quiz/quizQuestion/QuizQuestion';
import Button from '../../components/ui/buttons/Button';

const Quiz = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [questions, setQuestions] = useState([
    {
      question: 'What is the capital of France?',
      options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
      selectedOption: '',
    },
    {
      question: 'Which of the following is a programming language?',
      options: ['HTML', 'CSS', 'JavaScript', 'Photoshop'],
      selectedOption: '',
    },
    {
      question: 'Who developed the theory of relativity?',
      options: [
        'Isaac Newton',
        'Albert Einstein',
        'Galileo Galilei',
        'Marie Curie',
      ],
      selectedOption: '',
    },
  ]);

  const handleSelectOption = (questionIndex: number, option: string) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].selectedOption = option;
    setQuestions(updatedQuestions);
  };

  const handleNext = () => {
    setActiveQuestion(activeQuestion + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-9 w-[70%] mt-7 m-auto">
      
      <div className='w-full flex justify-between'>
        <p className='text-[24px]'><span className='text-[32px] text-primary'>{activeQuestion+1}</span>/{questions.length} </p>
        <div className="">0:09</div>
      </div>

      <div className="w-full bg-gray-200 rounded-1 h-2.5 dark:bg-primary">
        <div
          className="bg-primary h-2.5 rounded-1"
          style={{ width: `${((activeQuestion+1) * 100) / (questions.length)}%`}}
        ></div>
      </div>

      <div className='w-[90%]'>
        <QuizQuestion
          question={questions[activeQuestion].question}
          options={questions[activeQuestion].options}
          selectedOption={questions[activeQuestion].selectedOption}
          onSelectOption={(option) => handleSelectOption(activeQuestion, option)}
        />

        <div className="w-full mt-5 flex flex-around items-center">
          <Button
            onClick={handleNext}
            disabled={questions[activeQuestion].selectedOption === ''}
            className="mt-3 text-[24px] font-semibold"
          >
            {activeQuestion +1 !== questions.length ? 'Next' : 'Finish' }
          </Button>

          <p className='text-[20px] ml-3' onClick={handleNext}>Skip this question</p>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
