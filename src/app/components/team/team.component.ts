import { TeamService } from './../../services/team.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
team:any=[]
  constructor(private teamService:TeamService) { }

  ngOnInit() {
    this.teamService.displayAllTeams().subscribe(
      (data)=>{
        this.team=data.allteams
      }
    )
  }

}
