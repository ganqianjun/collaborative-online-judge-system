import { Component, OnInit, Inject } from '@angular/core';
import {Problem} from '../../models/problem.model';

const DEFAULT_PROBLEM = Object.freeze({
  id: 0,
  name:'',
  desc:'',
  difficulty:'Easy'
});

@Component({
  selector: 'app-new-problem',
  templateUrl: './new-problem.component.html',
  styleUrls: ['./new-problem.component.css']
})

export class NewProblemComponent implements OnInit {
  difficulties: string[] = ['Easy', 'Medium', 'Hard', 'Super'];
  newProblem: Problem = Object.assign({}, DEFAULT_PROBLEM);

  constructor(
    @Inject('data') private dataService,
    @Inject('authGuard') private authGuardService
  ) { }

  addProblem() : void {
    this.dataService.addProblem(this.newProblem)
                    .catch( error => console.log(error) );
    // to make the form empty after add a new problem
    this.newProblem = Object.assign({}, DEFAULT_PROBLEM);
  }

  ngOnInit() {
  }

}
