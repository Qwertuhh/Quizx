enum QuestionType {
  MCQ_SINGLE = "MCQ_SINGLE",
  MCQ_MULTI = "MCQ_MULTI",
  TRUE_FALSE = "TRUE_FALSE",
  SHORT_ANSWER = "SHORT_ANSWER",
  NUMERICAL = "NUMERICAL",
}

interface MCQSingleQuestionType {
  icon: "check-circle";
  color: "purple";
  text: string;
  type: QuestionType.MCQ_SINGLE;
  options: string[];
  correctAnswer: string;
}

interface MCQMultiQuestionType {
  icon: "check-square";
  color: "purple";
  text: string;
  type: QuestionType.MCQ_MULTI;
  options: string[];
  correctOptions: string[];
}

interface TrueFalseQuestionType {
  icon: "toggle-right";
  color: "purple";
  text: string;
  type: QuestionType.TRUE_FALSE;
  correctAnswer: boolean;
}

interface ShortAnswerQuestionType {
  icon: "edit-3";
  color: "purple";
  text: string;
  type: QuestionType.SHORT_ANSWER;
}

interface NumericalQuestionType {
  icon: "hash";
  color: "purple";
  text: string;
  type: QuestionType.NUMERICAL;
  correctAnswer: number;
}



export type { QuestionType as typeOfQuestionType, MCQSingleQuestionType, MCQMultiQuestionType, TrueFalseQuestionType, ShortAnswerQuestionType, NumericalQuestionType };