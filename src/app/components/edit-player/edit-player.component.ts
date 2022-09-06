import { searchById } from 'src/app/genericfunction/generic';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {
  player:any={};
  addEditForm:FormGroup;
  id:number;
  constructor(private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.id=+ this.activatedRoute.snapshot.paramMap.get("id")
    this.player=searchById(this.id,"players")
  }

  Edit(){
    var players=JSON.parse(localStorage.getItem("players")||"[]")
    for (let i = 0; i < players.length; i++) {
      if (this.id==players[i].id) {
        players[i]=this.player
        break;
        
      }
      
    }
    localStorage.setItem("players", JSON.stringify(players));
    
    this.router.navigate(["admin"])

  }
}
