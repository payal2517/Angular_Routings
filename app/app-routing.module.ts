import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TEchnologiesComponent } from './technologies/technologies.component';
import { BooksComponent } from './books/books.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path : 'technologies', component : TEchnologiesComponent},
  {path : 'books', component : BooksComponent},
  {path : '', component : TEchnologiesComponent},
  {path : '**', component : PagenotfoundComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
