import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
  @Input() matchInput:any;
  

 
  constructor() { }

  ngOnInit() {
    
  } 


  value(scOne,scTwo){

    var res;
    if (scOne>scTwo) {
      res="0"
    } else if (scOne<scTwo) {
      res="1"
      
    }else if(scOne==scTwo){
      res="2"
    }
    return res
  }
}
