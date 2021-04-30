import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDay'
})
export class FormatDayPipe implements PipeTransform {

  transform(day:number): string {
    return this.getDay(day);
  }

  getDay(day:number) : string{
    let days = ["Mon","Tues","Wed","Thurs","Fri","Sat","Sun"];
    return days[day];

  }

}
