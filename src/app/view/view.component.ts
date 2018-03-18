import { Component, OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { Trombone } from "../trombone";
import { TromboneService } from "../trombone.service";
import { TromboneSearchComponent } from "../trombone-search/trombone-search.component";

import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { of }         from 'rxjs/observable/of';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  trombones: Trombone[];

  selectedValue: string;

  private searchTerms = new Subject<string>();

  getTrombones(): void {
    this.tromboneService.getTrombones()
      .subscribe(trombones => this.trombones = trombones);
  };

  getType(type: string): void {
    console.log(type);
    this.tromboneService.searchType(type)
      .subscribe(trombones => this.trombones = trombones);
  };

  constructor(private tromboneService: TromboneService) { }

  ngOnInit() {
    this.getTrombones();
  }

}
