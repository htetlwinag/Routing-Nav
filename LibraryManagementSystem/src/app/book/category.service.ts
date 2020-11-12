import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) { }

  getBookCategory(): Observable<BookCategory> {
    return  this.httpClient.get<BookCategory>('http://localhost:8081/libMgmtSystem/categories');
  }

}

export interface BookC {
  id: number;
  name: string;
  author: string;
  edition: string;
  imgUrl: string;
  isbn: string;
  price: number;
  categoryId: number;
}

export interface Result {
  id: number;
  type: string;
  description: string;
  books: BookC[];
}

export interface BookCategory {
  errorCode: number;
  result: Result[];
  message: string;
}

