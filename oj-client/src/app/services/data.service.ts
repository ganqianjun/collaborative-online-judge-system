import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs/Rx';
import { Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Problem } from '../models/problem.model';

@Injectable()
export class DataService {
  private _problemSource = new BehaviorSubject<Problem[]>([]);

  constructor(private http: Http) { }

  getProblems(): Observable<Problem[]> {
    this.http.get('api/v1/problems')
             .toPromise()
             .then( (res: Response) => {
               this._problemSource.next(res.json())
              })
              .catch( this.handleError );
    return this._problemSource.asObservable();
  }

  getProblem(id: number): Promise<Problem> {
    return this.http.get(`api/v1/problems/${id}`)
                    .toPromise()
                    .then( (res: Response) => res.json() )
                    .catch( this.handleError );
  }

  addProblem(newProblem: Problem) {
    const headers = new Headers ({
      'content-type': 'application/json'
    });
    return this.http.post('api/v1/problems', newProblem, headers)
                    .toPromise()
                    .then( (res: Response) => {
                      // call 'getProblems' to let the new problem display
                      this.getProblems();
                      res.json();
                    })
                    .catch( this.handleError );
  }

  private handleError( error: any ): Promise<any> {
    console.error( 'An error happened: ', error );
    return Promise.reject (error.body || error);
  }
}
