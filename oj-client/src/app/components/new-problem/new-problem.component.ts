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
  newProblem: Problem = Object.assign({},DEFAULT_PROBLEM);

  difficulties: string[] = ['Easy','Medium','Hard','Super'];

  constructor(
    @Inject('data') private dataService
  ) { }

  addProblem() : void {
    this.dataService.addProblem(this.newProblem);
  }

  ngOnInit() {
  }

}
