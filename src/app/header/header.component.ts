import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  collapsed = true;
  @Output() keySelected = new EventEmitter<string>();

  onSelect(key: string) {
    this.keySelected.emit(key);
  }
}
