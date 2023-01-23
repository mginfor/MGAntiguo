import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators"
import { _config } from './properties'
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private _http: HttpClient, private genericService: GenericService) {

  }

  getResumedBlogs() {
    let headers = new HttpHeaders({
      'Content-Type': "application/json"
    })

    return this._http.get(_config.server + "blog/resumed", { headers })
      .pipe(map(res => JSON.parse(JSON.stringify(res))))
  }

  getCategories() {
    let headers = new HttpHeaders({
      'Content-Type': "application/json"
    })

    return this._http.get(_config.server + "blog/categories/list", { headers })
      .pipe(map(res => JSON.parse(JSON.stringify(res))))
  }


  findCategory(category) {
    let headers = new HttpHeaders({
      'Content-Type': "application/json"
    })
    let url = `http://localhost:3000/api/blog/categories/find`;

    url += `?category=${category}`;
    return this._http.get(url, { headers })
      .pipe(map(res => JSON.parse(JSON.stringify(res))))
  }

  getBlogPage(blogId: any) {
    let headers = new HttpHeaders({
      'Content-Type': "application/json"
    })

    return this._http.get(_config.server + "blog/" + blogId, { headers })
      .pipe(map(res => JSON.parse(JSON.stringify(res))))
  }




  sendEmail(form) {
    let params = {
      form: form
    }
    let headers = new HttpHeaders({
      'Content-Type': "application/json"
    })

    return this._http.post(_config.server + "mail/sendMail", params, { headers })
      .pipe(map(res => JSON.parse(JSON.stringify(res))))
  }






sendMessage(body) {
  return this._http.post("http://localhost:3000/formulario", body);
  }





}
