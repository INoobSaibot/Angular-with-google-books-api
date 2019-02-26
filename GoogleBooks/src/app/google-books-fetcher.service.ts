import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import GoogleBookDataModel from './google-book-data-model';
import { HttpClient } from 'selenium-webdriver/http';
@Injectable({
  providedIn: 'root'
})
export class GoogleBooksFetcherService {

  constructor() {
    
   }

  public getJSON(): Observable<GoogleBookDataModel> {
    return this.httpClient.get("./assets/whateverYouNamedIt.json").pipe(
        mergeMap((x:any) => x.items),
        map((x:any) => {
            let data = x.volumeInfo
            let gbModel: GoogleBookDataModel = new GoogleBookDataModel(data);
            return gbModel
        })
    )
 }
}
