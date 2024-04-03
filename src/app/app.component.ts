import { Component, OnInit, inject } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationStart, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }
  title = 'Angular Routing';

  router : Router = inject(Router)

  ClassLoader : boolean = false

  ngOnInit(){
    this.router.events.subscribe((routerEvent) => {

      if(routerEvent instanceof NavigationStart){
        this.ClassLoader = true;
      }

      if(routerEvent instanceof NavigationEnd){
        this.ClassLoader = false;
      }

      if(routerEvent instanceof NavigationCancel){
        this.ClassLoader = false;
      }
    });
  }

}

