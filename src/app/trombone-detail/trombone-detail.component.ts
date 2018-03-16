import { Component, OnInit, Input } from '@angular/core';
import { Trombone } from "../trombone";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { TromboneService }  from '../trombone.service';

@Component({
  selector: 'app-trombone-detail',
  templateUrl: './trombone-detail.component.html',
  styleUrls: ['./trombone-detail.component.css']
})
export class TromboneDetailComponent implements OnInit {

  @Input() trombone: Trombone;

  constructor(
    private route: ActivatedRoute,
    private tromboneService: TromboneService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getTrombone();
  }

  getTrombone(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.tromboneService.getTrombone(id)
      .subscribe(trombone => this.trombone = trombone);  
  };

  goBack(): void {
    this.location.back();
  };

}
