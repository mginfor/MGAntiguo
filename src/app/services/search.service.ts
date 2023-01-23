import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { GenericService } from './generic.service';
import { _config } from './properties';

@Injectable({
  providedIn: 'root'
})
export class SearchService {


  constructor(private _http: HttpClient) { }

  find_page(criteria) {
    let headers = new HttpHeaders({
      'Content-type': 'application/json'
    });

    let url = _config.server + `blog/find/content`;

    url += `?search=${criteria}`;

    return this._http.get(url, { headers: headers })
      .pipe(map(res => JSON.parse(JSON.stringify(res))));
  }




}
