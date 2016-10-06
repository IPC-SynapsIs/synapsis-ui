import { EventEmitter, Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

export class Project {
    constructor(
        public id: string,
        public title: string,
        public description: string,
        public categories: Array<string>) {
    }
}

/**
 * This class provides the Project service with methods to read projects and add projects.
 */
@Injectable()
export class ProjectService {

    searchEvent: EventEmitter<any> = new EventEmitter();
    ENDPOINT : string = "http://52.29.169.103/api/projet/";

  /**
   * Creates a new ProjectService with the injected Http.
   * @param {Http} http - The injected Http.
   * @constructor
   */
  constructor(private http: Http) {}

  /**
   * Returns an Observable for the HTTP GET request for the JSON resource.
   * @return {string[]} The Observable for the HTTP request.
   */
  get(): Observable<Project[]> {
    return this.http.get(this.ENDPOINT)
                    .map((res: Response) => res.json())
                    .catch(this.handleError);
  }

  getProjectById(projectId: String): Observable<Project> {
        return this.http.get(this.ENDPOINT+"/"+projectId)
            .map(response => response.json());
  }

  /**
   * Returns an Observable for the HTTP GET request for the JSON resource.
   * @return {string[]} The Observable for the HTTP request.
   */
  search(inTerm: string): Observable<Project[]> {
    return this.http.get(this.ENDPOINT+'/criterias/title?title='+encodeURIComponent(inTerm))
        .map((res: Response) => res.json())
        .catch(this.handleError);
  }

  /**
    * Handle HTTP error
    */
  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

  /**
   * Encodes the object into a valid query string.
   */
  private encodeParams(params: any): URLSearchParams {
      return Object.keys(params)
          .filter(key => params[key])
          .reduce((accum: URLSearchParams, key: string) => {
              accum.append(key, params[key]);
              return accum;
          }, new URLSearchParams());
  }
}

