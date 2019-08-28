import { Component } from '@angular/core';  // Component direktíva importálása

// dekorátor, függvényhívás, aminek a paramétereit állítjuk be (tömb) 
// dekorátor a component class-hoz fog tartozni, lefut a class előtt

@Component({
    selector: 'app-new',
    templateUrl: './new.component.html',
    styleUrls: ['./new.component.css']
})

export class newComponent
{
    title = 'component folder and file added manually';
    
    // komponens létrejöttekor mindig lefut a konstruktor
    constructor()
    {
        console.log(`Title of the new component: ${this.title}`);   // template literal
        this.greetings();
    }

    greetings()
    {
        console.log('function added');
    }
}