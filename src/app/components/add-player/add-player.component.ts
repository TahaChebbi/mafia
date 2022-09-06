
import { PlayerService } from './../../services/player.service';
import { Router} from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { generateId } from 'src/app/genericfunction/generic';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  addPlayerForm:FormGroup;
  player:any={}
  team:any=[]
  imagePreview:any;
  constructor(private router:Router,private playerService:PlayerService,private fb:FormBuilder) { }

  ngOnInit() {
      // this.team= JSON.parse(localStorage.getItem("teams") || "[]");
      this.addPlayerForm=this.fb.group({
        name:[""],
        position:[""],
        nbr:[""],
        age:[""],
        img:[""],
      

      })
  }
  ADD(){
    
    // var playerAdded = JSON.parse(localStorage.getItem("players") || "[]");
    // this.player.id= generateId(playerAdded) + 1;
    // playerAdded.push(this.player);
    // localStorage.setItem("players", JSON.stringify(playerAdded));
    // this.router.navigate(["admin"])
    this.playerService.addPlayer(this.player,this.addPlayerForm.value.img).subscribe(
      (data)=>{
        console.log(data.message);
        
      }
    );

  }
  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.addPlayerForm.patchValue({ img: file });
    this.addPlayerForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
    this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
    }

 
}
