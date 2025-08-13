import { Component, OnInit } from '@angular/core';
import { IPost } from '../models/post.model';
import { Postservice } from '../service/postservice';
@Component({
  selector: 'app-posts',
  standalone: false,
  templateUrl: './posts.html',
  styleUrl: './posts.css',
})
export class Posts implements OnInit {
  displayPosts: IPost[] = [];
  showform = false;

  newPost: IPost = {
    id: 0,
    title: '',
    body: '',
    imgurl: '',
    userid: 0,
    date: new Date(),
    like: false,
    likes: 0,
  };

  constructor(private postsService: Postservice) {}

  ngOnInit() {
    this.showPosts();
  }

  toggleForm() {
    this.showform = !this.showform;
    const audio = new Audio('best.mp3');
    audio.play().catch((err) => console.error('Error playing sound:', err));
  }

  showPosts() {
    this.displayPosts = this.postsService.getPosts();
  }

  deletePost(id: number) {
    this.postsService.deletePost(id);
    this.showPosts();
    const audio = new Audio('delete.wav');
    audio.play().catch((err) => console.error('Error playing sound:', err));
  }

  addpost() {
    if (
      !this.newPost.title.trim() ||
      !this.newPost.body.trim() ||
      !this.newPost.imgurl.trim() ||
      !this.newPost.userid
    ) {
      alert('Please fill in all required fields before submitting.');
      return;
    }

    this.postsService.addPost(this.newPost);
    this.showPosts();
    this.resetform();
    this.showform = false;
  }

  resetform() {
    this.newPost = {
      id: 0,
      title: '',
      body: '',
      imgurl: '',
      userid: 0,
      date: new Date(),
      like: false,
      likes: 0,
    };
  }

  likecounter(post: IPost) {
    this.postsService.likePost(post);
    // const audio = new Audio('235911.wav');
    const audio = new Audio('634452.mp3');
    audio.play().catch((err) => console.error('Error playing sound:', err));
  }
}
