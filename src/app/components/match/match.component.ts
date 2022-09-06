import { PlayerService } from './../../services/player.service';
import { MatchService } from './../../services/match.service';
import { Router } from '@angular/router';
import { deletee } from 'src/app/genericfunction/generic';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MATChComponent implements OnInit {
  match:any=[];
  constructor(private router:Router,private matchService:MatchService) { }

  ngOnInit() {
    // this.match=JSON.parse(localStorage.getItem("matches")||"[]")
    this.matchService.displayAllMatches().subscribe(
      (data)=>{
        this.match=data.match
        
      }
    )
   
  }


  deleteMatch(id){
    // deletee(id,"matches")
    // this.match=JSON.parse(localStorage.getItem("matches")||"[]")
    this.matchService.deleteMatchById(id).subscribe(
      (data)=>{
       
        this.matchService.displayAllMatches().subscribe(
          (data)=>{
            this.match=data.match
          }
        )
      }
      
    );
   
  }
  displayMatch(id){
        this.router.navigate([`displayMatch/${id}`])
        
   }
   editMatch(id){
    this.router.navigate([`editMatch/${id}`])
   }

}
