import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('day-02');
  showform = false;

  toggleForm() {
    this.showform = !this.showform;
  }
}
