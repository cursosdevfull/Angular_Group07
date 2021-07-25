import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ToUpper',
})
export class UpperPipe implements PipeTransform {
  transform(value: string | null) {
    if (!value) return '';

    return value.toUpperCase();
  }
}
