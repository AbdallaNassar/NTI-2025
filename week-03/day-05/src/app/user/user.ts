import { Component, Input } from '@angular/core';
import { Iuser } from '../models/user.model';
import { Userservice } from '../service/userservice';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.html',
  styleUrls: ['./user.css']
})
export class User {
    user!: Iuser;

  @Input() userid!: number;
  @Input() createdate!: Date;

  constructor(private userservice: Userservice) {}

  ngOnInit() {
    const foundUser = this.userservice.getUserById(this.userid);
    if (foundUser) {
      foundUser.subscribe(user => {
        this.user = user;
      });
    }
  }

}
