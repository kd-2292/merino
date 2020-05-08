import { AbstractControl, FormGroup } from '@angular/forms';


export function captchaValidator(control: AbstractControl) {

   if(control && (control.value !== null || control.value !== undefined)) {
        const capval =  control.value;
       // tslint:disable-next-line: align
       const validCaptchaInfo = control.root.get('validCaptcha');
        if(validCaptchaInfo) {
          const validCaptcha = validCaptchaInfo.value;
              // tslint:disable-next-line: align
              //console.table(validCaptcha);
              // tslint:disable-next-line: align
              //console.log('test----- '+ capval +'------'+ validCaptcha);
          if(capval !== validCaptcha) {
               return { captchaValid: true };
           }
        }
     }

     // tslint:disable-next-line: align
     return null;
  }






//   if (!control.value.startsWith('https') || !control.value.includes('.me')) {
//     return { urlValid: true };
//   }
//   return null;
// }
