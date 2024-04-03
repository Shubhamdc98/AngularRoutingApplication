import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { authentication } from '../Services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  // username = 'js'
  // password = 12345

  ActiveRoute : ActivatedRoute = inject(ActivatedRoute)

  @ViewChild('username') username : ElementRef
  @ViewChild('password') password : ElementRef
  
  AuthService : authentication = inject(authentication)

  

  onClick(){
    const user = this.username.nativeElement.value
    const pass = this.password.nativeElement.value
    this.AuthService.login(user, pass)
  }

  ngOnInit(): void {
    this.ActiveRoute.queryParamMap.subscribe((u) =>
    {
        const logout = u.get('toLogout')
        console.log(logout);

        if(logout){
          this.AuthService.logout()
          alert('you are now logged out')
        }
        
    })
  }
}
