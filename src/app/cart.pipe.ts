import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cart'
})
export class CartPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let output = "";
    for(let item of value){
      output += item.name + '|';
    }
    return output;
  }

}