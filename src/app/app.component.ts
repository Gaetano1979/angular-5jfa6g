import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  colums = ['nome','cognome','eta'];
  items = [
    { nome: "Gaetano", cognome: "Sabino", eta: 45 },
    { nome: "Giovanna", cognome: "Sabino", eta: 45 },
    { nome: "Silverio", cognome: "Sabino", eta: 45 }
  ];
  // items=['gaetano']
  name = "Angular";
}
