import { Component, OnInit } from '@angular/core';
import * as data from '../resource/data.json'; // my data.json file contain all data to show on the view.

const DISH = data.dish;

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

  dish = DISH;

  constructor() { }

  ngOnInit() {
  }

}
