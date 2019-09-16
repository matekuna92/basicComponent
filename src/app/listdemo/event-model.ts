export class EventModel
{
	id: number;
  name: string;
  pic: string;

  /* létrehozunk egy konstruktort, így megadható default érték a property-kre 
   -> ez megoldja a lenti problémát a hozzáadás függvényben, ahol csak eventModel típusú 
   adatszerkezetettel bővíthető a tömb, és kötelező mind 3 értéket megadni */

  //constructor(id = 0, name = '', pic = '')
  constructor(name: string, id = 0, pic = '')
  {
    this.id = id;
    this.name = name;
    this.pic = pic;
  }

}
