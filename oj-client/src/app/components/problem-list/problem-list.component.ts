import { Component, OnInit, Inject } from '@angular/core';
import { Problem } from '../../models/problem.model';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.css']
})
export class ProblemListComponent implements OnInit {
  problems: Problem[];

  problemsSubscription: Subscription;

  constructor(@Inject('data') private dataService) { }

  ngOnInit() {
    this.getProblems();
  }

  getProblems(): void{
    this.problemsSubscription =
      this.dataService.getProblems().subscribe(
        problems => this.problems = problems
      );
  }

  ngOnDestroy() {
    this.problemsSubscription.unsubscribe();
  }

  toTitleCase(str): string {
    return str.replace(/\w\S*/g, function(txt){
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
}
