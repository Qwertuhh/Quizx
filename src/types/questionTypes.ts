enum QuestionType {
  MCQ_SINGLE = "MCQ_SINGLE",
  MCQ_MULTI = "MCQ_MULTI",
  TRUE_FALSE = "TRUE_FALSE",
  SHORT_ANSWER = "SHORT_ANSWER",
  NUMERICAL = "NUMERICAL",
}

interface MCQSingleQuestion {
  icon: "check-circle";
  color: "purple";
  text: string;
  type: QuestionType.MCQ_SINGLE;
  options: string[];
  correctAnswer: string;
}

interface MCQMultiQuestion {
  icon: "check-square";
  color: "purple";
  text: string;
  type: QuestionType.MCQ_MULTI;
  options: string[];
  correctOptions: string[];
}

interface TrueFalseQuestion {
  icon: "toggle-right";
  color: "purple";
  text: string;
  type: QuestionType.TRUE_FALSE;
  correctAnswer: boolean;
}

interface ShortAnswerQuestion {
  icon: "edit-3";
  color: "purple";
  text: string;
  type: QuestionType.SHORT_ANSWER;
}

interface NumericalQuestion {
  icon: "hash";
  color: "purple";
  text: string;
  type: QuestionType.NUMERICAL;
  correctAnswer: number;
}

enum Question {
  MCQ_SINGLE = "MCQ_SINGLE",
  MCQ_MULTI = "MCQ_MULTI",
  TRUE_FALSE = "TRUE_FALSE",
  SHORT_ANSWER = "SHORT_ANSWER",
  NUMERICAL = "NUMERICAL",
}

export type { QuestionType, MCQSingleQuestion, MCQMultiQuestion, TrueFalseQuestion, ShortAnswerQuestion, NumericalQuestion };
export {type Question};