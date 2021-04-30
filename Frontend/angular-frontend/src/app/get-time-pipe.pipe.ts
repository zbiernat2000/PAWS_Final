import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getTime'
})
export class GetTimePipePipe implements PipeTransform {

  transform(hour: number,minute: number): string {
    return this.formatTime(hour,minute);

  }

  formatTime(hour: number,minute: number): string{
    let time : string = "";
    if(hour > 9)
        time += hour + ":";
    else 
        time += "0" + hour + ":";

    if(minute > 9)
        time += minute;
    else 
        time += "0" + minute;
    return time;
}


}
