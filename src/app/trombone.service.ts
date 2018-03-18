import { Injectable } from '@angular/core';
import { Trombone } from "./trombone";
import { TROMBONES } from "./mock-trombones";
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TromboneService {

  private trombonesUrl = 'api/trombones';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  getTrombones(): Observable<Trombone[]> {
    return this.http.get<Trombone[]>(this.trombonesUrl)
      .pipe(
        tap(heroes => this.log(`fetched trombones`)),
        catchError(this.handleError('getTrombones', []))
      );
  };

  getTrombone(id: number): Observable<Trombone> {
    const url = `${this.trombonesUrl}/${id}`;
    return this.http.get<Trombone>(url)
      .pipe(
        tap(_ => this.log(`fetched trombone id=${id}`)),
        catchError(this.handleError<Trombone>(`getTrombone id=${id}`))
      );
  };

  // getTromboneNo404<Data>(id: number): Observable<Trombone> {
  //   const url = `${this.trombonesUrl}/?id=${id}`;
  //   return this.http.get<Trombone[]>(url)
  //     .pipe(
  //       map(trombones => trombones[0]), // returns a {0|1} element array
  //       tap(h => {
  //         const outcome = h ? `fetched` : `did not find`;
  //         this.log(`${outcome} hero id=${id}`);
  //       }),
  //       catchError(this.handleError<Trombone>(`getTrombone id=${id}`))
  //     );
  // };

  /* GET heroes whose name contains search term */
  searchMaker(term: string): Observable<Trombone[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }

    return this.http.get<Trombone[]>(`api/trombones/?maker=${term}`).pipe(
      tap(_ => this.log(`found trombones matching "${term}"`)),
      catchError(this.handleError<Trombone[]>('searchTrombones', []))
    );
  }

  /* GET heroes whose name contains search term */
  searchType(term: string): Observable<Trombone[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }

    return this.http.get<Trombone[]>(`api/trombones/?type=${term}`).pipe(
      tap(_ => this.log(`found trombones matching "${term}"`)),
      catchError(this.handleError<Trombone[]>('searchTrombones', []))
    );
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add('TromboneService: ' + message);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
