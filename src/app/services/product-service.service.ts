import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireDatabaseModule} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFireDatabase) { }
  create(product): void{
    this.db.list('/products').push(product);
  }
   getAllProducts(): any {
    return this.db.list('/products').valueChanges();
  }
}
