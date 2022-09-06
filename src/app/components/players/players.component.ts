import { PlayerService } from "./../../services/player.service";
import { Router, ActivatedRoute } from "@angular/router";
import { deletee, searchById } from "src/app/genericfunction/generic";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-players",
  templateUrl: "./players.component.html",
  styleUrls: ["./players.component.css"],
})
export class PlayersComponent implements OnInit {
  player: any = [];
  idd: number;
  // pageSize = 5;
  constructor(
    private router: Router,
    private playerService: PlayerService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    // this.player = JSON.parse(localStorage.getItem("players")||"[]")
    this.playerService.displayAllplayers().subscribe((data) => {
      this.player = data.allplayers;
    });
  }

  deletePlayer(id) {
    // deletee(id,"players")
    // this.player=JSON.parse(localStorage.getItem("players")||"[]")
    this.playerService.deletePlayerById(id).subscribe((data) => {
      this.playerService.displayAllplayers().subscribe((data) => {
        this.player = data.allplayers;
      });
    });
  }

  editPlayer(id) {
    this.router.navigate([`editPlayer/${id}`]);
  }
  displayPlayer(id) {
    this.router.navigate([`displayPlayerId/${id}`]);
  }
  pageOfItems: Array<any>;
  onChangePage(x: Array<any>) {
    // update current page of items
    this.pageOfItems = x;
  }
}
