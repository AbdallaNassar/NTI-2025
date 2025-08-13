import { Component, OnInit } from '@angular/core';
import { IPost } from '../models/post.model';
import { FormsModule  } from '@angular/forms';
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
      id: 1,
      userid: 1,
      imgurl:
        'https://media.istockphoto.com/id/1281804798/photo/very-closeup-view-of-amazing-domestic-pet-in-mirror-round-fashion-sunglasses-is-isolated-on.jpg?s=612x612&w=0&k=20&c=oMoz9rUr-rDhMGNmEepCkr7F1g3AXs9416hvVnT_4CI=',
      createdate: new Date(),
            like:false,
      likes:0
    },
    {
      title: 'Digital Art Revolution',
      body: 'How digital tools are transforming artistic expression and creating new possibilities for creators.',
      id: 2,
      userid: 2,
      imgurl:
        'https://i5.walmartimages.com/seo/XUFX-Farmhouse-Animals-Canvas-Prints-Wall-Art-Funny-Donkey-Red-Glasses-Pictures-Posters-Modern-Artwork-Living-Room-Bedroom-Bathroom-Home-Wall-D-cor-R_9963c1cf-2a8a-4e59-9dc1-c0671bf83144.7b1a7549dfc8e5237182fe1a79b157ff.jpeg?odnHeight=320&odnWidth=320&odnBg=FFFFFF',
      createdate: new Date(),
            like:false,
      likes:0
    },
  ];

  displayPosts: IPost[] = [];
  showform:boolean=false;
   toggleForm(){
   this.showform = !this.showform;
  }
  ngOnInit() {
    this.showPosts();
  }

  showPosts() {
    this.displayPosts = [...this.posts];
  }

  deletePost(id: number) {
    this.posts = this.posts.filter((post) => post.id !== id);
    this.showPosts();
  }
  newPost: IPost = {
  id:0,
  title:"",
  body:"",
  imgurl:"",
  userid:0,
  createdate: new Date(),
  like:false,
     likes: 0

};
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

resetform(){
 this.newPost= {
  id:0,
  title:"",
  body:"",
  imgurl:"",
  userid:0,
  createdate: new Date(),
  like:false,
   likes: 0
};
};

likecounter(post:IPost){
  post.like=true;
  post.likes=++post.likes
}
}
