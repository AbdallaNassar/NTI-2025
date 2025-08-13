import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Footer } from './footer/footer';
import { NavBar } from './nav-bar/nav-bar';
import { Posts } from './posts/posts';

@NgModule({
  declarations: [
    App,
    Footer,
    NavBar,
    Posts
  ],
    imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
