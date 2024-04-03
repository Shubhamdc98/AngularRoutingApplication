import { Component, ElementRef, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls:['./home.component.css']
})
export class HomeComponent implements OnInit{

    activeRoute : ActivatedRoute = inject(ActivatedRoute)

    ngOnInit(): void {
        this.activeRoute.fragment.subscribe( data => {
            console.log(data);
            return  this.jumpTo(data);
        }
           
        )
    }

    jumpTo(value : string){
        document.getElementById(value).scrollIntoView({behavior : 'smooth'})
    }
}