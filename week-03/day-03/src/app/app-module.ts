import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { FormsModule } from '@angular/forms';
import { NavBar } from './nav-bar/nav-bar';
import { Footer } from './footer/footer';
import { Posts } from './posts/posts';
import { User } from './user/user';

@NgModule({
  declarations: [
    App,
    Footer,
    NavBar,
    Posts,
    User
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection()
  ],
  bootstrap: [App]
})
export class AppModule { }
