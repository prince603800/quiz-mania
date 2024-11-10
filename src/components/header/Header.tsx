import { QuizStep } from '../../App';
import { logo } from '../../assets/images';
import Button from '../ui/buttons/Button';

const Header = ({quizStep, userName, setQuizStep}: {quizStep:number, userName:string, setQuizStep: (step:number) => void}) => {
  return (
    <div className="w-full h-[60px] flex items-center justify-between border-b-[1px] border-b-[#D9D9D9]">
      <img className="ml-12" src={logo} />


      { quizStep === QuizStep.QUESTION && <Button variant="secondary" className="mr-3" onClick={() => setQuizStep(0)}>
        {' '}
        Exit Quiz{' '}
      </Button> }

      { quizStep === QuizStep.RESULT &&  <div className='mr-5'>
        <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-[#373052] rounded-full">
          <span className="text-[24px] font-bold text-[#F3F3E9]">{userName.slice(0,1)}</span>
        </div>
        <span className='ml-3 text-[20px] font-semibold'>{userName}</span>
      </div> }

    </div>
  );
};

export default Header;
