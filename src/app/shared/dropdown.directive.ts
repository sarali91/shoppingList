import {Directive, HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isToggle = false;

  @HostListener('click') toggleOpen() {
    this.isToggle = !this.isToggle;
  }

  constructor() { }

}
