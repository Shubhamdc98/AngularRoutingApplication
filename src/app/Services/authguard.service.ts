import { Injectable, inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, Resolve, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { authentication } from "./auth.service";
import { ContactComponent } from "../contact/contact.component";
import { Course } from "../Models/course";
import { CourseService } from "./course.service";

@Injectable({
    providedIn : 'root'
})
export class authGuardService implements CanActivate, CanActivateChild, CanDeactivate<ContactComponent>, Resolve<Course[]>{

    CourseService : CourseService = inject(CourseService)

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Course[] | Observable<Course[]> | Promise<Course[]> {
        // let course;
        // this.CourseService.getAllcourses().subscribe((data : Course[]) => {
        //     course = data
        // })
        // return course;
        return this.CourseService.getAllcourses();
    }
    

    canDeactivate(component: ContactComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot){
        return component.canExit();
    }
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        return this.canActivate(childRoute, state);
    }
    router : Router = inject(Router)
    authService : authentication = inject(authentication)

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
        boolean | Observable<boolean> | Promise<boolean>
    {
        console.log('inside authguardService');
        
        if(this.authService.isAuthenticated()){
            return true;
        }else{
           this.router.navigate(['/Login'])
           return true; 
        }
        
    }

}