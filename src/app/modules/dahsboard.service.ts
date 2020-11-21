import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DahsboardService {

  constructor() { }
  bigChart(){
    return[{
      name: 'Asia',
      data:[502,635,809]
    }];
  }
  cards(){
    return[71,78,39,66]
  }
  pieChart(){
    return[{name: "Chrome",
    y: 61.64,
    sliced: true,
    selected:true},
    {name: "Internet Explorer",
    y: "11.84"},{
    name: "Firefox",
    y: "10.85"
    }]
  }
}
