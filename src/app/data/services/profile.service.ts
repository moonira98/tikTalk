import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IProfile } from '../interfaces/profile.interface';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  http = inject(HttpClient)
  constructor() { }

  baseApiUrl: string = "https://icherniakov.ru/yt-course/"

  getTestAccounts() {
    return this.http.get<IProfile[]>(`${this.baseApiUrl}account/test_accounts`)
  }
}
