import { Component } from '@angular/core';

declare const problem: any;

@Component({
  selector: 'app-problem',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.css']
})
export class ProblemComponent {

  constructor() { }

  onClick() {
    problem();
  }
}
