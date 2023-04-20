import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TEchnologiesComponent } from './technologies/technologies.component';
import { BooksComponent } from './books/books.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TechnologiesbooksService } from './technologiesbooks.service';

@NgModule({
  declarations: [
    AppComponent,
    TEchnologiesComponent,
    BooksComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [TechnologiesbooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
