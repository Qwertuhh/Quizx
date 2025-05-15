import { Type } from "@google/genai";

const QuestionType = {
  MCQ_SINGLE: "MCQ_SINGLE",
  MCQ_MULTI: "MCQ_MULTI",
  TRUE_FALSE: "TRUE_FALSE",
  SHORT_ANSWER: "SHORT_ANSWER",
  NUMERICAL: "NUMERICAL",
};
const MCQSingleQuestion = {
  type: Type.OBJECT,
  properties: {
    text: { type: Type.STRING },
    type: { type: Type.STRING, enum: [QuestionType.MCQ_SINGLE] },
    options: { type: Type.ARRAY, items: { type: Type.STRING } },
    correctAnswer: {
      type: Type.INTEGER,
      description: "Index of the correct answer in the options array",
    },
  },
  required: ["text", "type", "options", "correctAnswer"],
  propertyOrdering: ["text", "type", "options", "correctAnswer"],
};
const MCQMultiQuestion = {
  type: Type.OBJECT,
  properties: {
    text: { type: Type.STRING },
    type: { type: Type.STRING, enum: [QuestionType.MCQ_MULTI] },
    options: {
      type: Type.ARRAY,
      items: { type: Type.INTEGER },
      description: "Index of the correct answers in the options array",
    },
    correctOptions: { type: Type.ARRAY, items: { type: Type.STRING } },
  },
  required: ["text", "type", "options", "correctOptions"],
  propertyOrdering: ["text", "type", "options", "correctOptions"],
};

const TrueFalseQuestion = {
  type: Type.OBJECT,
  properties: {
    text: { type: Type.STRING },
    type: { type: Type.STRING, enum: [QuestionType.TRUE_FALSE] },
    correctAnswer: {
      type: Type.BOOLEAN,
      description: "True or False",
    },
  },
};

const ShortAnswerQuestion = {
  type: Type.OBJECT,
  properties: {
    text: { type: Type.STRING },
    type: { type: Type.STRING, enum: [QuestionType.SHORT_ANSWER] },
  },
};

const NumericalQuestion = {
  type: Type.OBJECT,
  properties: {
    text: { type: Type.STRING },
    type: { type: Type.STRING, enum: [QuestionType.NUMERICAL] },
    correctAnswer: {
      type: Type.NUMBER,
      description: "Correct answer for the numerical question",
    },
  },
};

const Question = {
  type: Type.OBJECT,
  properties: {
    MCQSingleQuestion: {
      ...MCQSingleQuestion,
    },
    MCQMultiQuestion: {
      ...MCQMultiQuestion,
    },
    TrueFalseQuestion: {
      ...TrueFalseQuestion,
    },
    ShortAnswerQuestion: {
      ...ShortAnswerQuestion,
    },
    NumericalQuestion: {
      ...NumericalQuestion,
    },
  },
};

export {
  MCQSingleQuestion,
  MCQMultiQuestion,
  TrueFalseQuestion,
  ShortAnswerQuestion,
  NumericalQuestion,
};

export default Question;
