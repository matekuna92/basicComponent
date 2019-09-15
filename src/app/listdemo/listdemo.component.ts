import { Component } from '@angular/core';
import { EventModel } from './event-model';

/* best practise: külön class file-ban tároljuk, itt csak importáljuk
export class EventModel
{
	id: number;
  name: string;
  pic: string;

  /* létrehozunk egy konstruktort, így megadható default érték a property-kre 
   -> ez megoldja a lenti problémát a hozzáadás függvényben, ahol csak eventModel típusú 
   adatszerkezetettel bővíthető a tömb, és kötelező mind 3 értéket megadni 

  constructor(id = 0, name = '', pic = '')
  {
    this.id = id;
    this.name = name;
    this.pic = pic;
  }
}
*/

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
      name: 'HTML',
      pic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png'
    },
    {
      id: 2,
      name: 'CSS',
      pic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png'
    },
    {
      id: 3,
      name: 'JAVASCRIPT',
      pic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png'

    },
    {
      id: 4,
      name: 'BOOTSTRAP',
      pic: 'http://getbootstrap.com/docs/4.3/assets/brand/bootstrap-social.png'
    },
    {
      id: 5,
      name: 'JQUERY',
      pic: 'https://miro.medium.com/max/285/1*QR2SBNwG75LyY5uwqWpN3A.png'
    }
    ]
  }

  delete( id: number )
  {
    // filter: [o,x,o,x](?o?) --> [o,o] - alaptömböt nem módosítja
    this.events = this.events.filter( (evt: EventModel) => evt.id !== id );
    /* itt szándékosan felülírjuk az eredeti tömböt a filtered változattal
    id alapján minden elemet visszaadunk, egyedül az az elem kerül ki a tömbből, amelyet a click eseménynél
    törültünk --> <button (click)="delete(evt.id)"> */
  }

  add(newEventNameInput)
  {
  //  newEventNameInput.value = ''; // nullázom, különben az input mezőben marad az előző érték minden alkalommal
  
    /* nem működik, mert a value egyszerű stringet tartalmaz, nem egyezik meg a model-ben megadott 
    adatszerkezettel! --> id, name, pic szükséges minden objektumhoz -> nem tudjuk, milyen id-t adjunk meg */
   
    // this.events = [...this.events, newEventNameInput.value];

    /* ha kihagyom az id-t, akkor not assignable to parameter of type 'number' hiba:
    a konstruktorban id: number típust adtunk meg, így az első argumentumnak szám típusnak kell lennie */
    
    // this.events = [...this.events, new EventModel('alma')];

    console.log(newEventNameInput.value);

    // reduce függvénnyel megkeressük az aktuális legnagyobb id-t a tömbben, és ezt növeljük 1-el
    // az új elem esetén, így garantáltan mindig egyéni ID-t kapunk
    const maxId = this.events.reduce( (x,y) => x.id > y.id ? x : y).id;
    console.log(maxId);
    
    this.events = [...this.events, new EventModel(maxId + 1, newEventNameInput.value)];
    newEventNameInput.value = '';

    console.log(this.events);
  }
}
