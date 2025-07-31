import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { inject } from '@angular/core';
import { TokenResponse } from './auth.interface';
import { tap } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  http = inject(HttpClient)


  baseApiUrl: string = "https://icherniakov.ru/yt-course/auth/"
  token: string | null = null
  resfreshToken: string | null = null

  get IsAuth () {
    return !!this.token
  }

  login(payload: {username: string, password: string}) {
    const fd = new FormData()

    fd.append('username', payload.username)
    fd.append('password', payload.password)

   return this.http.post<TokenResponse>(`https://icherniakov.ru/yt-course/auth/token`,fd,).pipe(
    tap((res: TokenResponse) =>  {
      this.token = res.access_token,
      this.resfreshToken = res.refresh_token


    }
    )
   )
  }
}
