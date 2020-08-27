import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../_interface/iuser';
import { IFollowers } from '../_interface/ifollowers';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  
  constructor(private http: HttpClient) { }

  
  getUser(): Observable<IUser[]>{
    const api = 'https://api.github.com/orgs/angular/public_members';
    //console.log('todos', api);
    return this.http.get<IUser[]>(api);
  }

  getFoll(login: string): Observable<IFollowers>{
    const api = `https://api.github.com/users/${login}`;
    return this.http.get<IFollowers>(api);
  }

}