import { Component, OnInit } from '@angular/core';
import { IPost } from '../models/post.model';

@Component({
  selector: 'app-posts',
  standalone: false,
  templateUrl: './posts.html',
  styleUrl: './posts.css',
})
export class Posts implements OnInit {
  posts: IPost[] = [
{
      title: 'Exploring the Wonders of Nature',
      body: 'Discover the breathtaking beauty of our natural world through these stunning landscapes and wildlife encounters.',
      id: 101,
      userid: 1001,
      imgurl:
        'https://media.istockphoto.com/id/1281804798/photo/very-closeup-view-of-amazing-domestic-pet-in-mirror-round-fashion-sunglasses-is-isolated-on.jpg?s=612x612&w=0&k=20&c=oMoz9rUr-rDhMGNmEepCkr7F1g3AXs9416hvVnT_4CI=',
      date: new Date(),
      like: false,
      likes: 0,
    },
    {
      title: 'The Future of Technology',
      body: 'How emerging technologies are shaping our future and transforming everyday experiences across all industries.',
      id: 102,
      userid: 1002,
      imgurl:
        'https://img.freepik.com/free-vector/cute-cool-cat-wearing-glasses-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated_138676-4268.jpg?semt=ais_hybrid&w=740&q=80',
      date: new Date(),
      like: false,
      likes: 0,
    },
    {
      title: 'Urban Life and Architecture',
      body: 'Exploring modern cityscapes and the architectural marvels that define contemporary urban living.',
      id: 103,
      userid: 1003,
      imgurl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2OEkmAfahr1qQY0nV3Z0DaRwKFjYVMjuSHg&s',
      date: new Date(),
      like: false,
      likes: 0,
    },
    {
      title: 'Culinary Adventures',
      body: 'A journey through world cuisines and the art of cooking that brings people together across cultures.',
      id: 104,
      userid: 1004,
      imgurl:
        'https://i.pinimg.com/564x/f8/30/5f/f8305f5b676b669ea0cc99c6803a43fd.jpg',
      date: new Date(),
      like: false,
      likes: 0,
    },
    {
      title: 'Fitness and Wellness Trends',
      body: 'The latest approaches to health and fitness that are helping people achieve their wellness goals.',
      id: 105,
      userid: 1005,
      imgurl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL5OnVG_v96Q18U3zLTUns0DjBwSj11J5vpw&s',
      date: new Date(),
      like: false,
      likes: 0,
    },
    {
      title: 'Sustainable Living',
      body: "Practical ways to reduce your environmental footprint and live more sustainably in today's world.",
      id: 106,
      userid: 1006,
      imgurl:
        'https://thumbs.dreamstime.com/b/cool-husky-dog-trench-coat-studio-portrait-cool-husky-dog-trench-coat-studio-portrait-369088444.jpg',
      date: new Date(),
      like: false,
      likes: 0,
    },
    {
      title: 'Digital Art Revolution',
      body: 'How digital tools are transforming artistic expression and creating new possibilities for creators.',
      id: 107,
      userid: 1007,
      imgurl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt-zNNzfq6jQfiZ8iWBH5jUL4wN3izQbzWd4WyE2eT2vo41RhZDhSgwP_W98_-HP_YnKQ&usqp=CAU',
      date: new Date(),
      like: false,
      likes: 0,
    },
   {
      title: 'Digital Art Revolution',
      body: 'How digital tools are transforming artistic expression and creating new possibilities for creators.',
      id: 108,
      userid: 1008,
      imgurl:
        'https://i5.walmartimages.com/seo/XUFX-Farmhouse-Animals-Canvas-Prints-Wall-Art-Funny-Donkey-Red-Glasses-Pictures-Posters-Modern-Artwork-Living-Room-Bedroom-Bathroom-Home-Wall-D-cor-R_9963c1cf-2a8a-4e59-9dc1-c0671bf83144.7b1a7549dfc8e5237182fe1a79b157ff.jpeg?odnHeight=320&odnWidth=320&odnBg=FFFFFF',
      date: new Date(),
      like: false,
      likes: 0,
    },
  ];

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

  ngOnInit() {
    this.showPosts();
  }

  toggleForm() {
    this.showform = !this.showform;
  }

  showPosts() {
    this.displayPosts = [...this.posts];
  }

  deletePost(id: number) {
    this.posts = this.posts.filter((post) => post.id !== id);
    this.showPosts();
  }

 addpost() {
  if (!this.newPost.title.trim() || !this.newPost.body.trim() || 
      !this.newPost.imgurl.trim() || !this.newPost.userid) {
    alert("Please fill in all required fields before submitting.");
    return; 
  }

  const id = this.posts.length ? Math.max(...this.posts.map(p => p.id)) + 1 : 1;
  this.posts.push({ ...this.newPost, id: id });
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
    post.like = true;
    post.likes = ++post.likes;
  }
}