import { Component, Input } from '@angular/core';
import { Iuser } from '../models/user.model';
import { Data } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  users: Iuser[] = [
    {
      id: 1,
      username: "maostafa tarek",
      imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJqQNJt7Lz7TkAx-GvujbqXgpy0yrB0hhlGg&s",
      password: "123"
    },
    {
      id: 2,
      username: "mana ali",
      imgurl: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg",
      password: "356"
    }
  ];
    user!:Iuser;
  @Input()userid!:number;
  @Input()createdate !:Date;
ngOnInit(){
  this.user=this.users.find(u=>u.id===this.userid)!;
}
}
