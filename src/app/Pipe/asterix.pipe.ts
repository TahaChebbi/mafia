import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asterix'
})
export class AsterixPipe implements PipeTransform {

  transform(ch:string) {
    var test :boolean;
    var etoile:string=""
    var voyelle = ["a","o","e","u","i","y"];
    for (let i = 0; i < ch.length; i++) {
      let intermediate = ch[i]
      for (let j = 0; j < voyelle.length; j++) {   
       
        if (ch[i].toLocaleLowerCase() == voyelle[j]) {
          intermediate="*"
          break;

        }
       
        
      }
      etoile+=intermediate
      
    }
    return etoile
    
    
  }
 
 
}
