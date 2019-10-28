import { Injectable } from '@angular/core';
import { BehaviorSubject, timer, Observable } from 'rxjs';
import { Book } from '../models/book';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private bookSubject$: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([]);
  public books$ = this.bookSubject$.asObservable();

  constructor() {
    timer(2000)
      .subscribe(() => this.bookSubject$.next([
        {title: 'Book 01', pages: 200, authors: ['Bob']},
        {title: 'Book 02', pages: 100, authors: ['jhon', 'nicole']},
        {title: 'Book 03', pages: 220, authors: ['Fridge']},
        {title: 'Book 04', pages: 120, authors: ['Ane', 'Peter', 'San']},
        {title: 'Book 05', pages: 220, authors: ['paul', 'nicole']}]
      )
      );
  }

  add(b: Book) {
    this.bookSubject$.getValue().push(b);
  }
  remove(i: number) {
    let books = this.bookSubject$.getValue();
    if (i >= 0 && i < books.length) {
      books.splice(i, 1);
    }
  }
  get(i: number): Observable<Book> {
    return this.books$.pipe(
      map(books => (i > 0 && i < books.length) ? books[i] : null),
      delay(1000)
    );
  }

}
