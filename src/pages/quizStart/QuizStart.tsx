// screens/QuizStartScreen.tsx
import React, { useState } from "react";
import { UserInfo } from "../../interface/common_interface_type";
import QuizHeader from "../../components/features/quiz/quizHeader/QuizHeader";
import Input from "../../components/ui/formFields/Input";
import Select from "../../components/ui/formFields/Select";
import Button from "../../components/ui/buttons/Button";
import { logo } from "../../assets/images";
import Checkbox from "../../components/ui/formFields/Checkbox";

const QuizStartScreen: React.FC<{ onStart: (userInfo: UserInfo) => void }> = ({
  onStart,
}) => {
  const [name, setName] = useState("");
  const [checked, setChecked] = useState(true);

  const handleStart = () => {
    // onStart({ name,  });
  };

  return (
    <div className="flex flex-col items-center bg-secondary p-6">
      <h1 className="flex text-black justify-center items-center text-[32px] md:text-[64px] font-semibold">
        Welcome to{" "}
        <span className="ml-3 text-primary font-thin tracking-tighter">
          QUIZ<span className="font-bold">Mania</span>
        </span>
      </h1>

      <div>
        <div className="text-secondary bg-[#D9D9D94D] text-[20px] p-3 rounded-[8px] font-normal">
          <p className="">
            Please read all the rules about this quiz before you start.
          </p>
          <p className="text-primary">Quiz rules</p>
        </div>

        <div className="mt-3 w-[600px]">
          <Input
            label="Full Name"
            value={name}
            onChange={setName}
            placeholder="Enter your name"
          />

          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center w-[284px] mt-3 px-3 h-[56px] border-[1px] border-[#D9D9D9] rounded-[8px]">
              <Checkbox
                label="Javascript Basic"
                checked={checked}
                setChecked={setChecked}
              />
            </div>
            <div className="flex items-center w-[284px] mt-3 px-3 h-[56px] border-[1px] border-[#D9D9D9] rounded-[8px]">
              <Checkbox
                label="Javascript Basic"
                checked={checked}
                setChecked={setChecked}
              />
            </div>
            <div className="flex items-center w-[284px] mt-3 px-3 h-[56px] border-[1px] border-[#D9D9D9] rounded-[8px]">
              <Checkbox
                label="Javascript Basic"
                checked={checked}
                setChecked={setChecked}
              />
            </div>
            <div className="flex items-center w-[284px] mt-3 px-3 h-[56px] border-[1px] border-[#D9D9D9] rounded-[8px]">
              <Checkbox
                label="Javascript Basic"
                checked={checked}
                setChecked={setChecked}
              />
            </div>
           
          </div>

          <Button onClick={handleStart} disabled={!name} className="mt-3">
            Start Quiz
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuizStartScreen;
