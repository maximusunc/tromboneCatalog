import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { of }         from 'rxjs/observable/of';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Trombone } from '../trombone';
import { TromboneService } from '../trombone.service';

@Component({
  selector: 'app-trombone-maker',
  templateUrl: './trombone-maker.component.html',
  styleUrls: ['./trombone-maker.component.css']
})
export class TromboneMakerComponent implements OnInit {
  trombones$: Observable<Trombone[]>;

  private searchTerms = new Subject<string>();

  constructor(private tromboneService: TromboneService) { }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.trombones$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.tromboneService.searchMaker(term)),
    );
  }

}
