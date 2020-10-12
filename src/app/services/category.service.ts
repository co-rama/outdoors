import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db: AngularFireDatabase) { }
  async getCategories(): Promise<any> {
    return this.db.list('/categories');
    // return this.db.object('/categories');
  }
}
