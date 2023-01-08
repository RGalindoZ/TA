import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
    value += " CUSTOMIZADO POR MYPIPE"
    return value;
  }

}
