import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  addMatch:any=[];
  addTeam:any=[];
  addAdmin="DASHBOARD"
  
  constructor() { }

  ngOnInit() {
    this.addMatch =JSON.parse(localStorage.getItem("matches")||"[]")
    this.addTeam =JSON.parse(localStorage.getItem("teams")||"[]")
  }



}
