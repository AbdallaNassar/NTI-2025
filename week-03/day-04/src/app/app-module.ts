import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Footer } from './footer/footer';
import { NavBar } from './nav-bar/nav-bar';
import { Posts } from './posts/posts';
import { Login } from './login/login';
import { User } from './user/user';

@NgModule({
  declarations: [
    App,
    Footer,
    NavBar,
    Posts,
    Login,
    User
  ],
    imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
