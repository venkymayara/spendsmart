import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'inr', standalone: true })
export class CurrencyInrPipe implements PipeTransform {
  transform(value: number): string {
    return '₹' + value.toLocaleString('en-IN');
  }
}