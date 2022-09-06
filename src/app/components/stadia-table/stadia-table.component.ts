import { Router } from '@angular/router';
import { StadiumService } from './../../services/stadium.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stadia-table',
  templateUrl: './stadia-table.component.html',
  styleUrls: ['./stadia-table.component.css']
})
export class StadiaTableComponent implements OnInit {
  stadium:any=[]
  constructor(private stadiumService:StadiumService,private route:Router) { }

  ngOnInit() {
    this.stadiumService.getAllStadiums().subscribe((data)=>{
      this.stadium=data.message
    })
  }
  editStadium(id){
    this.route.navigate([`stadiumForm/${id}`])
  }

}
