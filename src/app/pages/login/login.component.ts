declare var google: any;

import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {

  private router = inject(Router);

  ngOnInit(): void {
    google.accounts.id.initialize({
      client_id:
        '928415767645-0u8jgi4mck0m3lb4us8j6i4s0lc6kurl.apps.googleusercontent.com',
      callback: (response: any) => {
        this.handleLogin(response);
      },
    });

    google.accounts.id.renderButton(document.getElementById('google-btn'), {
      theme: 'filled-blue',
      size: 'large',
      shape: 'rectangle',
      width: 350
    });
  }
  private decodeToken(token : string){
    return JSON.parse(atob(token.split('.')[1]));
  }

  handleLogin(response:any){
    if(response){
      //decode
      //save in session
      // navigate to netflix
      const playload = this.decodeToken(response.credential);
      sessionStorage.setItem('loginUser', JSON.stringify(playload));
      this.router.navigate(['browse']);
    }
  }
}
