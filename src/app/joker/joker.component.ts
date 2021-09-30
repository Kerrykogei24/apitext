import { JokerService } from './../joker.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joker',
  templateUrl: './joker.component.html',
  styleUrls: ['./joker.component.css']
})
export class JokerComponent implements OnInit {
  reports:any;

  constructor(public joker:JokerService) { }
  getJoker(){
    this.joker.getjokers().subscribe(data =>{
     this.reports=data;
     console.log(this.reports)
      return data
    });
  }
  ngOnInit(): void {
    return this.getJoker()
  }

}
