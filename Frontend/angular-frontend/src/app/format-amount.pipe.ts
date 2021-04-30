import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatAmount'
})
export class FormatAmountPipe implements PipeTransform {

  transform(amount: number): string {
    return this.getAmount(amount);
  }

  getAmount(amount:number): string{
    let str = "";

    let quotient = Math.floor(amount/8);
    let remainder = amount % 8;

    if(quotient != 0)
      str += quotient + " ";
    if(remainder != 0)
      str += remainder +"/8 "
    if(quotient == 0 && remainder == 0)
      str += "0 ";
    str += "Cup";
    if(amount != 8)
      str += "s";
    
    return str;
  }

}
