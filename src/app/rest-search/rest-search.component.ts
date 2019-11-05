import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Rest } from '../restaurant';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-rest-search',
  templateUrl: './rest-search.component.html',
  styleUrls: ['./rest-search.component.css']
})
export class RestSearchComponent implements OnInit {
  rests$: Observable<Rest[]>;
  private searchTerms = new Subject<string>();

  constructor(private restService: RestaurantService) { }

    // Push a search term into the observable stream.
    search(term: string): void {
      this.searchTerms.next(term);
    }

    ngOnInit(): void {
      this.rests$ = this.searchTerms.pipe(
        // wait 300ms after each keystroke before considering the term
        debounceTime(300),
  
        // ignore new term if same as previous term
        distinctUntilChanged(),
  
        // switch to new search observable each time the term changes
        switchMap((term: string) => this.restService.searchRests(term)),
      );
    }

}
