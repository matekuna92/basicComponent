import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basicComponent';
  items = ["Running", "Walking", "Cycling", "Swimming"];
  show = false;
  clickedStatus = true;
 // inputContent: string = "string1, string2, string3";
  inputContent: string;

  toggle()
  {
	this.show = !this.show;   // egyenlővé teszi a változó negáltjával
	this.inputContent = "string1, string2, string3";
  }
/* ha sima event-et adok meg paraméterként, az IDE nem dobja fel javaslatként a mouseover esemény
tualjdonságait, amit a böngésző konzolban látunk (altKey, clientX, offsetX, stb), de ha konkrétan megadjuk, 
hogy mouse event-et várunk, akkor már felismeri az IDE a típust, és megjelenik a lehetséges property-k listája */
  
	/* demo(event)
	{
		console.log(event);
	} */

	demo(evt: MouseEvent)
	{
		console.log(evt.clientX);
	}
}
