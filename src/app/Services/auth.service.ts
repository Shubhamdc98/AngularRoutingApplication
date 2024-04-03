import { Injectable, inject } from "@angular/core";
import { UserService } from "./user.service";
import { Router } from "@angular/router";

@Injectable({
    providedIn : 'root'
})
export class authentication{
    router : Router = inject(Router)
    isLogged : boolean = false
    UserService : UserService = inject(UserService)


    login(username : string, password : string){
        let user = this.UserService.users.find((u) => 
            u.username === username && u.password === password)
            
        if(user === undefined){
            this.isLogged = false
        alert('Please Enter valid Username and Password')
        }else{
            this.isLogged = true
        // alert('Welcome ' + user.name + ' ')
        this.router.navigate(['/Courses'])//when user clicks ok of alert this line will execute
        }
            return user   
    }

    logout(){
        this.isLogged = false
    }

    isAuthenticated(){
        console.log('We are inside IsAuthentication Service');
        return this.isLogged;
    }
}