import { Injectable } from '@angular/core';
import { Observable, timer, BehaviorSubject } from 'rxjs';
import { Eletronic } from '../models/eletronic';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EletronicService {

  private eletronicSubject$: BehaviorSubject<Eletronic[]> = new BehaviorSubject<Eletronic[]>([]);
  public eletronics$ = this.eletronicSubject$.asObservable();

  constructor() {
    timer(1000)
      .subscribe (() => {
        this.eletronicSubject$.next([
          { name: 'Headphone', brand: 'Adidas', price: 200, description: 'Loren ipsum' },
          { name: 'name 2', brand: 'Bose', price: 150, description: 'Loren ipsum' },
          { name: 'name 3', brand: 'nike', price: 400, description: 'Loren ipsum' },
          { name: 'Headphname 4one', brand: 'Bose', price: 985, description: 'Loren ipsum' }
        ]);
      });
   }

   get(i: number): Observable<Eletronic> {
    return this.eletronics$.pipe(
      map(eletronics => (i > 0 && i < eletronics.length) ? eletronics[i] : null),
      delay(1000)
    );
  }

}
