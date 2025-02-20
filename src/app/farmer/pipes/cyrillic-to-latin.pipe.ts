import { Pipe, PipeTransform } from '@angular/core';
import { transliterate } from './translator';
import CyrillicToTranslit from 'cyrillic-to-translit-js';

@Pipe({
  name: 'cyrillicToLatin'
})
export class CyrillicToLatinPipe implements PipeTransform {

  

  transform(value: unknown, ...args: unknown[]): unknown {
    return transliterate(value);
  }

}


