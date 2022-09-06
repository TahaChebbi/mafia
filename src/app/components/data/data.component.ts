import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  datas:any=[];
  datas2:any=[];

  contentEditable=false
  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.displayAllData().subscribe(
      (data)=>{
        this.datas=data.donnee
      }
    );
  }
  toggleEditable(event,id) {
    if ( event.target.checked ) {
        this.contentEditable = true;
        this.datas2.push(id)
        
   }
}
  transfer(){
    console.log("hi");  
    console.log(this.datas2);
  
  }

}
