import { useEffect, useRef, useState } from 'react';
import QuizQuestion from '../../components/features/quiz/quizQuestion/QuizQuestion';
import Button from '../../components/ui/buttons/Button';
import { Question } from '../../interface/common_interface_type';

interface Props {
  questions: Question['questions']; 
  onNext: (option: number) => void;
  correctAnswersCount: number;
  setCorrectAnswersCount: (count: number) => void;
  skippedQuestionsCount: number;
  setSkippedQuestionsCount: (count: number) => void;
}

const Quiz = ({questions, onNext, correctAnswersCount, setCorrectAnswersCount,skippedQuestionsCount,setSkippedQuestionsCount}:Props) => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [questionsSet, setQuestionsSet] = useState<Question['questions']>([]);
  const [timeInSeconds, setTimeInSeconds] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  
  const handleSelectOption = (questionIndex: number, option: string) => {
    const updatedQuestions = [...questionsSet];
    updatedQuestions[questionIndex].selectedOption = option;
    setQuestionsSet(updatedQuestions);
    if(updatedQuestions[questionIndex].selectedOption === updatedQuestions[questionIndex].correctAnswer) {
      setCorrectAnswersCount(correctAnswersCount + 1);
    }
  };

  const handleNext = () => {
    if(activeQuestion !== questions.length -1) {
      setTimeInSeconds(0);
      setActiveQuestion(activeQuestion + 1);
    } else {
      onNext(2);
    }
  };

  const handleSkip = () => {
    setSkippedQuestionsCount(skippedQuestionsCount+1);
    if(activeQuestion !== questions.length -1) {
      setTimeInSeconds(0);
      setActiveQuestion(activeQuestion + 1);
    } else {
      onNext(2);
    }
  };

  const startTimer = () => {

    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    setTimeInSeconds(0);

    timerRef.current = setInterval(() => {
      setTimeInSeconds((prevTime) => {
        if (prevTime === 10) {  
          clearInterval(timerRef.current!);
          handleSkip();
          return 0;
        }
        return prevTime + 1;
      });
    }, 1000);
  };

  useEffect(() => {
    const updatedQuesWithSelectedOptionKeys = questions.map(question => ({ ...question, selectedOption: '' }));
    setQuestionsSet(updatedQuesWithSelectedOptionKeys);
  },[]);

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) {clearInterval(timerRef.current);}
    };
  }, [activeQuestion]);

  return (
    <div className="flex flex-col items-center justify-center space-y-9 w-full md:w-[70%] p-3 md:p-0 mt-7 m-auto">
      
      {questionsSet.length > 0 && <>
        
        <div className='w-full flex justify-between'>
          <p className='text-[24px]'><span className='text-[32px] text-primary'>{activeQuestion+1}</span>/{questionsSet.length} </p>
          <div className="">0:{timeInSeconds % 10 === 0 ? '' : '0'}{timeInSeconds}</div>
        </div>

        <div className="w-full bg-gray-200 rounded-1 h-2.5 dark:bg-primary">
          <div
            className="bg-primary h-2.5 rounded-1"
            style={{ width: `${((activeQuestion+1) * 100) / (questionsSet.length)}%`}}
          ></div>
        </div>

        <div className='w-full md:w-[90%]'>
        
          <QuizQuestion
            question={questionsSet[activeQuestion].question}
            options={questionsSet[activeQuestion].options}
            selectedOption={questionsSet[activeQuestion].selectedOption || ''}
            onSelectOption={(option) => handleSelectOption(activeQuestion, option)} 
            correctAnswer={questionsSet[activeQuestion].correctAnswer} />

          <div className="w-full mt-5 ml-[20%] flex flex-around items-center">
            <Button
              onClick={handleNext}
              disabled={questionsSet[activeQuestion].selectedOption === ''}
              className="mt-3 text-[24px] font-semibold"
            >
              { activeQuestion !== questionsSet.length - 1 ? 'Next' : 'Finish' }
            </Button>

            {questionsSet[activeQuestion].selectedOption ==='' &&<button className='text-[20px] ml-3' onClick={handleSkip}>Skip this question</button>}
          </div>
        </div>
      </>}
    </div>
  );
};

export default Quiz;
