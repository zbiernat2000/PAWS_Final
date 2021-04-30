import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isRepeating'
})

export class IsRepeatingPipe implements PipeTransform {

  transform(repeating: boolean): string {
    if (repeating)
      return "\u2713";
    else
      return "X";
  }

}
