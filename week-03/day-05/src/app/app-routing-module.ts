import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './login/login';
import { Posts } from './posts/posts';
import { User } from './user/user';
import { AuthGuard } from './service/auth.guard';

const routes: Routes = [
  { path: 'login', component: Login },
  { path: '', component: Posts, canActivate: [AuthGuard] },
  { path: 'posts', component: User, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
