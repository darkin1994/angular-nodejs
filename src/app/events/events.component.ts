import { Component, OnInit } from '@angular/core';
import { ItemService } from "../service/item.service";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  products: any =[];
  constructor(private _ItemService: ItemService) { }

  ngOnInit(): void {
    this._ItemService.allproduct().subscribe(res => this.products = res,err =>console.log(err));
  }

}
