import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  equipments: object[] = [
    {name:"Habitat dome"},
    {name:"Drones"},
    {name:"Food containers"},
    {name:"Oxygen tanks"}
  ];
  itemBeingEdited: object = null;
  constructor() { }

  ngOnInit() {
  }

  add(equipmentName: string) {
      this.equipments.push({name: equipmentName});
  }

  remove(item: object) {
    let index = this.equipments.indexOf(item);
    this.equipments.splice(index, 1);
  }

  edit(item: object) {
    this.itemBeingEdited = item;
 }

  save(name: string, item: object) {
  item['name'] = name;
  this.itemBeingEdited = null;
  }
}
