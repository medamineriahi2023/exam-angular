import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Badge} from "../models/Badge";

@Injectable({
  providedIn: 'root'
})
export class BadgesService {

  constructor(private http: HttpClient) {
  }

  getBadges(): Observable<Badge[]> {
    return this.http.get<Badge[]>("http://localhost:3000/badges");
  }


  updateBadge(id : any , badge:Badge): Observable<Badge> {
    return this.http.put<Badge>("http://localhost:3000/badges/"+id , badge);
  }
}
