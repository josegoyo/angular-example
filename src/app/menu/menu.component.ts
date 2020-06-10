import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import * as data from '../resource/data.json'; // my data.json file contain all data to show on the view.

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes: Dish[] = data.dishes;

  constructor() { }

  ngOnInit() {
  }

}
