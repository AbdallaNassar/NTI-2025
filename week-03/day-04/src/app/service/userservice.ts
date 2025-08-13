import { Injectable } from '@angular/core';
import { Iuser } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class Userservice {
     private users: Iuser[] = [
  {
    id: 1001,
    username: "maostafa tarek",
    imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJqQNJt7Lz7TkAx-GvujbqXgpy0yrB0hhlGg&s",
    password: "123"
  },
  {
    id: 1002,
    username: "mana ali",
    imgurl: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg",
    password: "356"
  },
  {
    id: 1003,
    username: "ahmed mohamed",
    imgurl: "https://randomuser.me/api/portraits/men/32.jpg",
    password: "789"
  },
  {
    id: 1004,
    username: "sara samir",
    imgurl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    password: "sara123"
  },
  {
    id: 1005,
    username: "omar khaled",
    imgurl: "https://randomuser.me/api/portraits/men/75.jpg",
    password: "omar2023"
  },
  {
    id: 1006,
    username: "laila hassan",
    imgurl: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    password: "laila456"
  },
  {
    id: 1007,
    username: "youssef adel",
    imgurl: "https://randomuser.me/api/portraits/men/91.jpg",
    password: "youssef789"
  },
  {
    id: 1008,
    username: "nada waleed",
    imgurl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    password: "nada000"
  }
];
 getUserById(id: number): Iuser | undefined {
    return this.users.find(u => u.id === id);
  }

  getAllUsers(): Iuser[] {
    return this.users;
  }
}
