import { AppRoutingModule } from './app-routing.module';
import { PostService } from './post.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { Router,RouterModule} from '@angular/router';
import { NewFormComponent } from './new-form/new-form.component';
import { FileUploadComponent } from './file-upload/file-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostDetailComponent,
    NewFormComponent,
    FileUploadComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'posts/:postId', component: PostDetailComponent },
    ])
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
