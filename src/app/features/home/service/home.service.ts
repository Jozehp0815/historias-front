import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Home } from '../model/home-interface';

@Injectable({
  providedIn: 'root',
})
export class HomeService {

  private API: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getHome(): Observable<Home> {
    return this.http.get<Home>(`http://localhost:8080/api/v1/home`, { withCredentials: true });
  }
}
