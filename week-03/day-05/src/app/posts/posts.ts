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
    this.postsService.getPosts().subscribe((posts: IPost[]) => {
      this.displayPosts = posts;
    });
  }

deletePost(id: number) {
  this.postsService.deletePost(Number(id)).subscribe(() => {
    this.showPosts();
  });
}




  convertIdToString(id: number): string {
    return id.toString();
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

    this.postsService.addPost(this.newPost).subscribe(() => {
    
      this.showPosts();
      this.resetform();
      this.showform = false;
    });
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
  this.postsService.likePost(post).subscribe({
    next: (updatedPost) => {
      const index = this.displayPosts.findIndex(p => p.id === post.id);
      if (index !== -1) {
        this.displayPosts[index] = updatedPost;
      }
      const audio = new Audio('634452.mp3');
      audio.play().catch((err) => console.error('Error playing sound:', err));
    },
    error: (err) => {
      console.error('Error liking post:', err);
    }
  });
}
}
