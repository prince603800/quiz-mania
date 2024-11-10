// types/quiz.ts

export type UserInfo = {
    fullName: string;
    category: string
  };

export type Question = {
    id: string;
    name: string;
    questions: {
      id:string;
      question: string;
      options: string[];
      correctAnswer: string;
      timeLimit: number;
      selectedOption?: string;
    } []
  };
