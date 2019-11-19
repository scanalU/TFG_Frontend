import { Injectable } from '@angular/core';
import { Rest } from './restaurant';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private restsUrl = 'api/restaurants';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    ) { }

    
    
  getRests(): Observable<Rest[]> {
    return this.http.get<Rest[]>(this.restsUrl)
    .pipe(
      tap(_ => this.log('fetched restaurants')),
      catchError(this.handleError<Rest[]>('getRests', []))
    )
  }

  getRest(id: number): Observable<Rest> {
    const url = `${this.restsUrl}/${id}`;
    return this.http.get<Rest>(url).pipe(
      tap(_ => this.log(`fetched rest id=${id}`)),
      catchError(this.handleError<Rest>(`getRest id=${id}`))
    );
  }

  /** GET rest by id. Return `undefined` when id not found */
  getRestNo404<Data>(id: number): Observable<Rest> {
    const url = `${this.restsUrl}/?id=${id}`;
    return this.http.get<Rest[]>(url)
      .pipe(
        map(rests => rests[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} rest id=${id}`);
        }),
        catchError(this.handleError<Rest>(`getRest id=${id}`))
      );
  }

  searchRests(term: string): Observable<Rest[]> {
    if (!term.trim()) {
      // if not search term, return empty rest array.
      return of([]);
    }
    return this.http.get<Rest[]>(`${this.restsUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found rests matching "${term}"`)),
      catchError(this.handleError<Rest[]>('searchRests', []))
    );
  }

  addRest (rest: Rest): Observable<Rest> {
    return this.http.post<Rest>(this.restsUrl, rest, this.httpOptions).pipe(
      tap((newRest: Rest) => this.log(`added rest w/ id=${newRest.id}`)),
      catchError(this.handleError<Rest>('addRest'))
    );
  }

  deleteRest (rest: Rest | number): Observable<Rest> {
    const id = typeof rest === 'number' ? rest : rest.id;
    const url = `${this.restsUrl}/${id}`;
  
    return this.http.delete<Rest>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted rest id=${id}`)),
      catchError(this.handleError<Rest>('deleteRest'))
    );
  }

  updateRest (rest: Rest): Observable<any> {
    return this.http.put(this.restsUrl, rest, this.httpOptions).pipe(
      tap(_ => this.log(`updated rest id=${rest.id}`)),
      catchError(this.handleError<any>('updateRest'))
    );
  }

  private log(message: string) {
    this.messageService.add(`RestaurantService: ${message}`);
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
