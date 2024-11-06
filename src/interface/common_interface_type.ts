// types/quiz.ts

export type UserInfo = {
    name: string;
    ageGroup: string;
    difficulty: string;
  };

export type Question = {
    question: string;
    options: string[];
    correctAnswer: string;
  };
