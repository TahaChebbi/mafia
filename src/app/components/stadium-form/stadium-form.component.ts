import { ActivatedRoute, Router } from '@angular/router';
import { StadiumService } from './../../services/stadium.service';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-stadium-form',
  templateUrl: './stadium-form.component.html',
  styleUrls: ['./stadium-form.component.css']
})
export class StadiumFormComponent implements OnInit {
  title="Add Stadium"
  stadiumForm:FormGroup
  stadiumObj:any={}
  constructor(private fb:FormBuilder,private stadiumService:StadiumService,private activatedRoute:ActivatedRoute,private route:Router) { }
  id:any;
  ngOnInit() {
    this.id=this.activatedRoute.snapshot.paramMap.get("id")
    if (this.id) {
      this.title="Edit Stadium"
      this.stadiumService.getStadiumById(this.id).subscribe((data)=>{
        this.stadiumObj=data.message
      })
      
    }
    this.stadiumForm =this.fb.group({
      name:["",Validators.required],
      capacity:[""],
      country:[""],
      foundation:[""],
    })
  }
  // Question 3al editt fi nafs Formulaire w nafs leclick onSubmit kifeh 
  onSubmit(){
    if (this.id) {
        this.stadiumService.editStadium(this.stadiumObj).subscribe()
        this.route.navigate(["admin"])
    } else {
      this.stadiumService.addStadium(this.stadiumForm.value).subscribe(
        (data)=>{
          console.log("Stadium added successfully");
          
        }
      )
    }
   
    
  }

}
