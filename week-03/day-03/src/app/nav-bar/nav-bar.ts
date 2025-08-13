import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: false,
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css'
})
export class NavBar {
  @Input() showform = false;
  @Output() toggleFormEvent = new EventEmitter<void>();

  toggleForm() {
    this.toggleFormEvent.emit();
  }
}
