import { Quiz } from './quiz.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  quizzes: Quiz[] = [
    {
      question: 'What is the capital of India',
      answer: [
        { option: 'Bangalore', correct: false },
        { option: 'Delhi', correct: true },
        { option: 'Mumbai', correct: false },
      ],
    },
    {
      question: 'What is the capital of Karnataka state',
      answer: [
        { option: 'Bangalore', correct: true },
        { option: 'Delhi', correct: false },
        { option: 'Mumbai', correct: false },
      ],
    },
    {
      question: 'What is the capital of Maharastra state',
      answer: [
        { option: 'Bangalore', correct: false },
        { option: 'Delhi', correct: false },
        { option: 'Mumbai', correct: true },
      ],
    },
    {
      question: 'What is the capital of Telangane state',
      answer: [
        { option: 'Bangalore', correct: false },
        { option: 'Hyderabad', correct: true },
        { option: 'Mumbai', correct: false },
      ],
    },
    {
      question: 'What is the capital of Tamil nadu state',
      answer: [
        { option: 'Bangalore', correct: false },
        { option: 'Chennai', correct: true },
        { option: 'Mumbai', correct: false },
      ],
    },
  ];

  constructor() {}

  getQuizzes() {
    return this.quizzes;
  }
}
