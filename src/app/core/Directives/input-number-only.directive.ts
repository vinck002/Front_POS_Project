import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[NumberOnly]'
})
export class InputNumberOnlyDirective {

  constructor(private el:ElementRef) { }

  @HostListener('input', ['$event']) 
  onChangeInput(event: Event){
    const numbersExp = /[^0-9]*/g;
    const initVal = this.el.nativeElement.value;
    this.el.nativeElement.value = initVal.replace(numbersExp, '');
    if(initVal !== this.el.nativeElement.value){

    }
      event.stopPropagation();  
    }

}
