// screens/QuizStartScreen.tsx
import React, { useEffect, useMemo, useState } from 'react';
import { Question, UserInfo } from '../../interface/common_interface_type';
import Input from '../../components/ui/formFields/Input';
import Button from '../../components/ui/buttons/Button';
import Checkbox from '../../components/ui/formFields/Checkbox';
import { categoriesQuestions } from '../../constants/questions';
import Modal, { ModalSize } from '../../components/ui/modal/Modal';
import QuizInfo from '../quizInfo/QuizInfo';


const QuizStartScreen: React.FC<{ onStart: (userInfo: UserInfo) => void, onNext: (step:number) => void, userInfo: UserInfo, setQuestions: (questions:Question['questions']) => void }> = ({
  onStart,
  onNext,
  userInfo,
  setQuestions,
}) => {
  const [name, setName] = useState(userInfo.fullName);
  const [selectedSubjet, setSelectedSubject] = useState(userInfo.category);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [subjects, setSubjects] = useState([
    {
      label: 'JavaScript Basics',
      checked: false,
    },
    {
      label: 'React Basics',
      checked: false,
    },
    {
      label: 'Vue Basics',
      checked: false,
    },
    {
      label: 'Angular Basics',
      checked: false,
    },
  ]);

  const handleStart = () => {
    onStart({ fullName: name,  category: selectedSubjet});
    onNext(1);
  };

  const modalStatusToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleCheckUncheck = (value:boolean, index:number) =>{
    const updatedSubjects = subjects.map((subject, i) => ({
      ...subject,
      checked: i === index ? value : false,
    }));
    setSubjects(updatedSubjects);
    setSelectedSubject(updatedSubjects[index].label);
  };

  const selectedQuestions = useMemo(
    () =>
      categoriesQuestions.find(
        (categoryQuestion: Question) => categoryQuestion.name === selectedSubjet,
      )?.questions || [],
    [selectedSubjet],
  );

  useEffect(() => {
    setQuestions(selectedQuestions);
  }, [selectedQuestions, setQuestions]);


  return (
    <>
      <div className="w-full flex flex-col items-center p-3 md:p-0 bg-secondary ">
      
        <h1 className="flex text-black justify-center items-center text-[32px] md:text-[64px] font-medium">
        Welcome to{' '}
          <span className="ml-3 text-primary font-thin tracking-tighter">
          QUIZ<span className="font-bold">Mania</span>
          </span>
        </h1>

        <div>
          <div className="w-full h-[70px] md:h-[82px] text-secondary bg-[#D9D9D94D] text-[14px] md:text-[20px] p-3 rounded-[8px] font-normal">
            <p className="">
            Please read all the rules about this quiz before you start.
            </p>
            <p className="text-primary" onClick={modalStatusToggle}>Quiz rules</p>
          </div>

          <div className="mt-5">
            <Input
              label="Full Name"
              value={name}
              onChange={setName}
              placeholder="Full Name"
            />

            <p className='text-[16px] font-normal mt-5'>Please select topic to continue</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {subjects.map((subject, index) => <div key={index} className={`flex items-center w-full md:w-[284px] mt-3 px-3 h-[56px] border-[1px] ${subject.checked? 'border-[#b92b5d]': 'border-[#D9D9D9]'}  rounded-[8px]`}>
                <Checkbox
                  label={subject.label}
                  checked={subject.checked}
                  setChecked={(e:boolean) => { handleCheckUncheck(e, index); }}
                />
              </div>)}
            </div>

            <Button onClick={handleStart} disabled={!selectedSubjet} className="mt-7 text-[24px]">
            Start Quiz
            </Button>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        title="Quiz rules"
        onClose={modalStatusToggle}
        modalSize={ModalSize.MEDIUM}
      >
        <QuizInfo />
      </Modal>
    </>
  );
};

export default QuizStartScreen;
