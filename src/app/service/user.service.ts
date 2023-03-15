import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private router: Router) { }

  login(data: any) {
    this.http.post("http://localhost:4200/login", data).subscribe((result: any) => {
      localStorage.setItem("token", result.token);
      this.router.navigate(['/home'])
    })
  }
  home() {
    let headers = new HttpHeaders()
    .set("Authorization",`bearer ${localStorage.getItem('token')}`)
    this.http.post("http://localhost:4200/login", {},{headers}).subscribe((result: any) => {

    })
  }
}
