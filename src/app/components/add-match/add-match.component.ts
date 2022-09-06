import { Router } from '@angular/router';
import { MatchService } from './../../services/match.service';
import { generateId } from "src/app/genericfunction/generic";
import { FormGroup } from "@angular/forms";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-add-match",
  templateUrl: "./add-match.component.html",
  styleUrls: ["./add-match.component.css"],
})
export class AddMatchComponent implements OnInit {
  match: any = {};

  addMatchForm: FormGroup;
  constructor(private matchService:MatchService,private route:Router) {}

  ngOnInit() {}

  add() {
    // var matchAdded = JSON.parse(localStorage.getItem("matches") || "[]");
    // this.match.id = generateId(matchAdded) + 1;
    // matchAdded.push(this.match);
    // localStorage.setItem("matches", JSON.stringify(matchAdded));
    // location.reload();
    this.matchService.addMatch(this.match).subscribe();
    this.route.navigate(["admin"])
  }
}


