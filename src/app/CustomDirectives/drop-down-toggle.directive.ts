import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDropDownToggle]'
})
export class DropDownToggleDirective {
  
@HostListener('document:click',[`$event`]) openDropDown(event:Event){
  this.isOpen=this.elementRef.nativeElement.contains(event.target)?!this.isOpen:false;
}

@HostBinding('class.open') isOpen:boolean;
  constructor(private elementRef:ElementRef) { }

}
