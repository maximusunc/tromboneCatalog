import { Component, OnInit } from '@angular/core';
import { Trombone } from "../trombone";
import { TromboneService } from "../trombone.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  trombones: Trombone[];

  getTrombones(): void {
    this.tromboneService.getTrombones()
      .subscribe(trombones => this.trombones = trombones);
  }

  constructor(private tromboneService: TromboneService) { 
    
  }

  ngOnInit() {
    this.getTrombones();
  }

}
