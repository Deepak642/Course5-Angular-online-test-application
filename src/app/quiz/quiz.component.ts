import { QuizService } from './../quiz.service';
import { Quiz } from './../quiz.model';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit {
  quizzes: Quiz[] = [];
  currentQuiz = 0;

  answerSelected = false;
  correctAnswers = 0;
  IncorrectAnswers = 0;
  result = false;

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.quizzes = this.quizService.getQuizzes();
  }

  onAnswer(option: boolean) {
    this.answerSelected = true;

    setTimeout(() => {
      this.currentQuiz++;
      this.answerSelected = false;
    }, 3000);
    if (option) {
      this.correctAnswers++;
    } else {
      this.IncorrectAnswers++;
    }
  }
  showResult() {
    this.result = true;
  }
}
