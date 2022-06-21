import { Injectable } from '@angular/core';
import { Item } from '../model/itemDTO';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {formatNumber} from "@angular/common";
@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private itemsUrl = 'api/items/';
  constructor(private http: HttpClient) { }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.itemsUrl).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  createItem(item: Item): Observable<Item> {
    item.id = null;
    return this.http.post<Item>(this.itemsUrl, item).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    )
  }

  editItem(item: Item): Observable<any> {
    return this.http.put(this.itemsUrl + item.id, item);
  }

  deleteItem(id: number): Observable<any> {
    return this.http.delete(this.itemsUrl + id);
  }

  getItem(id: number): Observable<any> {
    return this.http.get<Item>(this.itemsUrl + id);
  }
}
