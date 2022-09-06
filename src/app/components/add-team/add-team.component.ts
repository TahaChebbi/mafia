import { TeamService } from './../../services/team.service';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
team :any={}
addTeamForm:FormGroup;
  constructor(private teamService:TeamService) { }

  ngOnInit() {
  }
  ADD(){
    // var teamAdded = JSON.parse(localStorage.getItem("teams") || "[]");
    // teamAdded.push(this.team);
    // localStorage.setItem("teams", JSON.stringify(teamAdded));
    // location.reload();
    this.teamService.addTeam(this.team).subscribe();
  }
}
