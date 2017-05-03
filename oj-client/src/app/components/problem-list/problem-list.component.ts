import { Component, OnInit, Inject } from '@angular/core';
import { Problem } from '../../models/problem.model';

@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.css']
})
export class ProblemListComponent implements OnInit {
  problems: Problem[];

  constructor(@Inject('data') private dataService) { }

  ngOnInit() {
    this.getProblems();
  }

  getProblems(): void{
    this.problems = this.dataService.getProblems();
  }

  toTitleCase(str): string {
    return str.replace(/\w\S*/g, function(txt){
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
}
