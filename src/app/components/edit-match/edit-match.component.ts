import { MatchService } from './../../services/match.service';
import { ActivatedRoute, Router } from '@angular/router';
import { generateId, searchById, deletee } from 'src/app/genericfunction/generic';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.css']
})
export class EditMatchComponent implements OnInit {
  editMatchForm:FormGroup;
  match:any={}
  id:any;
  constructor(private ActivatedRoute:ActivatedRoute,private router:Router,private matchService:MatchService) { }

  ngOnInit() {
    this.id= this.ActivatedRoute.snapshot.paramMap.get("id")
    this.matchService.displayMatchById(this.id).subscribe((data)=>{
    this.match=data.dispMatches
   })
    
  }

  Edit() {
    // let matchAdded = JSON.parse(localStorage.getItem("matches") || "[]");
    // for (let i = 0;i < matchAdded.length;i++) {
    //   if (matchAdded[i].id==this.id) {
    //       matchAdded[i]=this.match
    //       break;
        
    //   }
    
    // }
    // localStorage.setItem("matches", JSON.stringify(matchAdded));
    
    // this.router.navigate(["admin"])
    this.matchService.editMatch(this.match).subscribe()
    this.router.navigate(["admin"])
  }
}
