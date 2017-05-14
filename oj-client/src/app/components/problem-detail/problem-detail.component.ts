import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Problem } from '../../models/problem.model';

@Component({
  selector: 'app-problem-detail',
  templateUrl: './problem-detail.component.html',
  styleUrls: ['./problem-detail.component.css']
})

export class ProblemDetailComponent implements OnInit {
  problem: Problem;

  constructor(
    @Inject('data') private dataService,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.dataService.getProblem(+params['id'])
                      .then( problem => this.problem = problem );
    })
  }

}
