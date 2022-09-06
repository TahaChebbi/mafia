import { MatchService } from './../../services/match.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  matches:any;
  constructor(private matchService:MatchService) { }

  ngOnInit() {
    // this.matches=JSON.parse(localStorage.getItem("matches")||"[]")
   
  }

}
