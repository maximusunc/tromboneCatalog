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
  selector: 'app-trombone-type',
  templateUrl: './trombone-type.component.html',
  styleUrls: ['./trombone-type.component.css']
})
export class TromboneTypeComponent implements OnInit {
  trombones$: Observable<Trombone[]>;
  
  selectedValue: string;

  constructor(private tromboneService: TromboneService) { }



  ngOnInit(): void {

  }

}
