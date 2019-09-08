import { Component, OnInit } from '@angular/core';

export class EventModel
{
	id: number;
	name: string;
}

@Component({
  selector: 'app-listdemo',
  templateUrl: './listdemo.component.html',
  styleUrls: ['./listdemo.component.css']
})
export class ListdemoComponent {
//  events: any[];	// bármilyen típusú elemeket tároló tömb
    events: EventModel[]; // EventModel-ben megadott adatszerkezetű elemeket várunk a tömbbe

  constructor()
  {
    this.events = [
    {
      id: 1,
      name: 'HTML'
    },
    {
      id: 2,
      name: 'CSS'
    },
    {
      id: 3,
      name: 'JAVASCRIPT'
    },
    {
      id: 4,
      name: 'BOOTSTRAP'
    },
    {
      id: 5,
      name: 'JQUERY'
    }
    ]
  }
}
