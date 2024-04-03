import { Component , inject} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  routes:Router = inject(Router)

  onClick(value : string){
    this.routes.navigate(['/Courses'], {queryParams : {search : value}})
    
  }
}
