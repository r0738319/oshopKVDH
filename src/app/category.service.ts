import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  observableCategories$: Observable<any>;


  constructor(private db: AngularFireDatabase) {this.observableCategories$ = this.db
    .list('/categories', (ref) => ref.orderByChild('name'))
    .snapshotChanges(); }
    
    getAll() {
      return this.observableCategories$.pipe(
        map((changes) => {
          return changes.map((c: { payload: { key: any; val: () => any; }; }) => ({ key: c.payload.key, ...c.payload.val() }));
        })
      );
    }
  }

