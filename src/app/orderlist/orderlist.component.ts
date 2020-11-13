import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Orderlist} from '../orderlist';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent implements OnInit {
  
  orderlists:Orderlist[]=[
    new Orderlist(1,'Rice',2 , 'Kikuyu'),
    new Orderlist(2,'Chips',5 , 'Kinoo'),

  ]
  @Input() orderlist: Orderlist;
  @Output() isAccepted = new EventEmitter<boolean>();

  orderAccepted(complete:boolean){
    this.isAccepted
    .emit(complete);
  }
  @Output() isDeclined = new EventEmitter<boolean>();

  orderDeclined(complete:boolean){
    this.isDeclined
    .emit(complete);
  }
  constructor() { }

  ngOnInit(){
  }

}
