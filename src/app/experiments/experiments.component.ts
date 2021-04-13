import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {

  experiments: object[] = [
    {type: "Mars soil sample"},
    {type: "Plant growth in habitat"},
    {type: "Human bone density"}
  ];
  experimentBeingEdited: object = null;

  constructor() { }

  ngOnInit() {
  }

  add(itemType: string) {
      this.experiments.push({type: itemType});
  }

  remove(item: object) {
    let index = this.experiments.indexOf(item);
    this.experiments.splice(index, 1);
  }

  edit(item: object) {
    this.experimentBeingEdited = item;
 }

  save(type: string, experiment: object) {
  experiment['type'] = type;
  this.experimentBeingEdited = null;
  }

}
