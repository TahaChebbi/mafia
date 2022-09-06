import { MatchService } from './../../services/match.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { searchById } from 'src/app/genericfunction/generic';

@Component({
  selector: 'app-display-match',
  templateUrl: './display-match.component.html',
  styleUrls: ['./display-match.component.css']
})
export class DisplayMatchComponent implements OnInit {
id: any;
match:any;
  constructor(private activateRoute:ActivatedRoute,private matchService:MatchService) { }

  ngOnInit() {
   
    // =+ : convertir string to number
    this.id=this.activateRoute.snapshot.paramMap.get("id")
    // this.match= searchById(this.id,"matches")
    this.matchService.displayMatchById(this.id).subscribe((data)=>{
      this.match=data.dispMatches
    })
  }
 

}
