import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(phone = ''): unknown {
    let result = '';
    const lengthPhone = phone.length;

    if (lengthPhone === 10) 
    {
      result = phone.substring(0, 3);
      result = result.concat(' ').concat(phone.substring(3, 6));
      result = result.concat(' ').concat(phone.substring(6, 10));

      return result;
    } 
    else 
    {
      console.error('Se require un teléfono de 10 números.');
      return '';
    }
  }

}
