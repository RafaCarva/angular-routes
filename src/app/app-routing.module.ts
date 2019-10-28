import { BookDetailComponent } from './book/book-detail/book-detail.component';
import { DvdFormComponent } from './dvd/dvd-form/dvd-form.component';
import { DvdDetailComponent } from './dvd/dvd-detail/dvd-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DvdComponent } from './dvd/dvd.component';
import { BookComponent } from './book/book.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'dvds', component: DvdComponent },
  { path: 'books', component: BookComponent,
    children: [
      { path: ':index', component: BookDetailComponent },
    ]

  },
  { path: 'dvds/new', component: DvdFormComponent },
  { path: 'dvds/:index', component: DvdDetailComponent },
  { path: '', pathMatch: 'full', redirectTo: 'dvds' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
