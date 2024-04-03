import { Component, ElementRef, inject } from '@angular/core';
import { Course } from '../../Models/course';
import { CourseService } from '../../Services/course.service';
import {  ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent {
  courseService = inject(CourseService)
  popularCourses: Course[] = [];
  router : Router = inject(Router)
  activedRoute : ActivatedRoute = inject(ActivatedRoute)
  ngOnInit(){
    this.popularCourses = this.courseService.courses.filter(c => c.rating >= 4.5);
    
  }

  onClick(){
    //this.router.navigate(['course'],{relativeTo : this.activedRoute});
    //above line links course to relative path... (here its /home)
    this.router.navigate(['Courses']);
  }

}
