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