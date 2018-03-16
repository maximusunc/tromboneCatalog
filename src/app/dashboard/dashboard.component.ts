import { Component, OnInit } from '@angular/core';
import { Trombone } from '../trombone';
import { TromboneService } from '../trombone.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  trombones: Trombone[] = [];

  constructor(private tromboneService: TromboneService) { }

  ngOnInit() {
    this.getTrombones();
  }

  getTrombones(): void {
    this.tromboneService.getTrombones()
      .subscribe(trombones => this.trombones = trombones.slice(0, 4));
  }
}
