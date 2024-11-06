import { useState } from 'react';
import QuizStartScreen from './pages/quizStart/QuizStart';
import Header from './components/header/Header';
import QuizQuestion from './pages/quizQuestions/QuizQuestions';
import QuizResultScreen from './pages/quizResult/QuizResult';

function App() {
  const [count, setCount] = useState(0);

  const onStart = () => {
    // eslint-disable-next-line no-console
    console.log('Hello world');
  };

  return (
    <>
      <Header/>

      
      {/* <QuizStartScreen onStart={onStart}/> */}
      {/* <QuizQuestion/> */}
      <QuizResultScreen/>
    </>
  );
}

export default App;
