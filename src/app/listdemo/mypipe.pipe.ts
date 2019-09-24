import { Pipe, PipeTransform } from '@angular/core';

// dekorátor, név megadása
@Pipe({
  name: 'mypipe'
})

export class MypipePipe implements PipeTransform {

  /* ahhoz, hogy a MypipePipe meg tudja valósítani a PipeTransform interface-t,
  a transform függvényt kell használnia 
  https://angular.io/guide/pipes */

  transform(value: any, times: number): any {
    return value.repeat(times);
  }
}
