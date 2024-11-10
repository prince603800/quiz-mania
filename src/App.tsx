import { useState } from 'react';
import QuizStartScreen from './pages/quizStart/QuizStart';
import Header from './components/header/Header';
import QuizQuestion from './pages/quizQuestions/QuizQuestions';
import QuizResultScreen from './pages/quizResult/QuizResult';
import { Question, UserInfo } from './interface/common_interface_type';

export enum QuizStep {
  START = 0,
  QUESTION = 1,
  RESULT = 2,
}

function App() {
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [skippedQuestionsCount, setSkippedQuestionsCount] = useState(0);
  const [quizStep, setQuizStep] = useState(0);
  const [questions, setQuestions] = useState<Question['questions']>([]);
  const [userInfo, setUserInfo] = useState({
    fullName: '',
    category: '',
  });

  const onStart = (userInfo: UserInfo) => {
    setUserInfo(userInfo);
  };

  const onNext = (step: number) => {
    setQuizStep(step);
  };

  const restartQuiz = (step: number) => {
    setQuizStep(step);
    setQuestions([]);
    setCorrectAnswersCount(0);
    setSkippedQuestionsCount(0);
  };

  return (
    <div className="w-screen overflow-hidden">
      <Header quizStep={quizStep} userName={userInfo.fullName} setQuizStep={setQuizStep}/>

      {quizStep === QuizStep.START && (
        <QuizStartScreen
          onStart={onStart}
          onNext={onNext}
          userInfo={userInfo}
          setQuestions={setQuestions}
        />
      )}

      {quizStep === QuizStep.QUESTION && (
        <QuizQuestion
          questions={questions}
          onNext={onNext}
          correctAnswersCount={correctAnswersCount}
          setCorrectAnswersCount={setCorrectAnswersCount}
          skippedQuestionsCount={skippedQuestionsCount}
          setSkippedQuestionsCount={setSkippedQuestionsCount}
        />
      )}

      {quizStep === QuizStep.RESULT && (
        <QuizResultScreen
          score={correctAnswersCount}
          skippedQuestions={skippedQuestionsCount}
          totalQuestions={questions.length}
          onRestart={() => restartQuiz(0)}
        />
      )}
    </div>
  );
}

export default App;
