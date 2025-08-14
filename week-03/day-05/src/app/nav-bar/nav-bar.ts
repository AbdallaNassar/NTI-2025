import { Component } from '@angular/core';
import { Userservice } from '../service/userservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: false,
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css'
})
export class NavBar {
  currentUser: any;

  constructor(
    private userservice: Userservice,
    private router: Router
  ) {
    this.currentUser = this.userservice.getLoggedInUser();
  }

  logout() {
    this.userservice.logout();
    this.router.navigate(['/login']);
  }
}

