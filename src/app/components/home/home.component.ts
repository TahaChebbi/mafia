import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
match:any=[];
  constructor() { }

  ngOnInit() {
      this.match=JSON.parse(localStorage.getItem("matches")|| "[]")
  }

}
