import { Injectable } from '@angular/core';
import { IPost } from '../models/post.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Postservice {
  private apiUrl = 'http://localhost:3000/posts';
  constructor(private http: HttpClient) {}

  getPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(this.apiUrl);
  }

addPost(post: IPost): Observable<IPost> {
  // تحويل ID إلى string إذا كان رقمًا
  const postToSend = {
    ...post,
    id: post.id.toString()
  };
  return this.http.post<IPost>(this.apiUrl, postToSend);
}

  deletePost(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }

likePost(post: IPost): Observable<IPost> {
  const url = `${this.apiUrl}/${post.id}`;
  const updatedPost = {
    ...post,
    like: !post.like, 
    likes: post.like ? post.likes - 1 : post.likes + 1,
  };
  return this.http.put<IPost>(url, updatedPost);
}
}
