import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the DatePipe pipe.
 */

 @Pipe({
  name: 'datePipe',
})
export class DatePipe implements PipeTransform {
  /**
   * Date as mm/dd/yyyy.
   */
  transform(value: string, ...args) {
    if (value && value.startsWith("/Date(")) {
      return new Date(parseInt(value.substr(6))).toLocaleDateString();
    }
    return value;
  }
}
