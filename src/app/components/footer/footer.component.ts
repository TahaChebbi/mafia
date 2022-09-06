import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"],
})
export class FooterComponent implements OnInit {
  // c = "salah";

  constructor() {}

  ngOnInit() {}

  // execute() {
    // var x = [];
    // var y = [];

    // for (let i = 0; i < this.c.length; i++) {
    //   var s = 1;
    //   y[i] = this.c[i];
    //   for (let j = i + 1; j <= this.c.length; j++) {
    //     if (y[i] == this.c[j]) {
    //       s = s + 1;
    //       x[i] = s;
    //     } else {
    //       x[i] = s;
    //     }
    //   }
    // }
    // for (let k = 0; k < x.length; k++) {
    //   console.log(`${k}`, x[k]);
    //   console.log(`${k}`, y[k]);
      
    // }
    // var t = 0;
    // for (let i = 0; i < y.length; i++) {
    //   var a = y[i];
    //   for (let j = i + 1; j <= y.length; j++) {
    //     if (a == y[j]) {
    //       y.splice(j, 1);
    //       x.splice(j, 1);
    //     }
    //   }
    //   console.log(a, ":", x[i]);
    // }
    // var t = 0;
    // for (let i = 0; i < x.length; i++) {
    //   t = t + x[i];
    // }
    // console.log("total :", t);
  }


//   display() {

//   }
//   verifChar(x, T){
//     var exist = false;
//     for (let i = 0; i < T.length; i++) {
//       if (T[i] == x) {
//         exist = true;
//         break;
//       }
      
//     }
//     return exist;
//   }
//  }
