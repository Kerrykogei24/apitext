import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchUserComponent } from './search-user/search-user.component';
import { UserDataComponent } from './user-data/user-data.component';
import { RepoComponent } from './repo/repo.component';
import { NavComponent } from './nav/nav.component';
import { DateAgoPipe } from './pipes/date-ago.pipe';
import { HighlightDirective } from './highlight.directive';
import { NotFoundComponent } from './not-found/not-found.component';
import { JokerComponent } from './joker/joker.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchUserComponent,
    UserDataComponent,
    RepoComponent,
    NavComponent,
    DateAgoPipe,
    HighlightDirective,
    NotFoundComponent,
    JokerComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
