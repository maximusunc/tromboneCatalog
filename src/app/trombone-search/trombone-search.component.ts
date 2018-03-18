import { Component, Output, OnInit, EventEmitter } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { of }         from 'rxjs/observable/of';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Trombone } from '../trombone';
import { TromboneService } from '../trombone.service';

@Component({
  selector: 'app-trombone-search',
  templateUrl: './trombone-search.component.html',
  styleUrls: [ './trombone-search.component.css' ]
})
export class TromboneSearchComponent implements OnInit {
  trombones$: Observable<Trombone[]>;

  search: string = "";

  private searchTerms = new Subject<string>();

  @Output() searchTrombones = new EventEmitter<string>();

  sendSearch() {
    this.searchTrombones.emit(this.search);
  }

  constructor(private tromboneService: TromboneService) {}

  

  ngOnInit(): void {

  }
}
