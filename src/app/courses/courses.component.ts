import { Component, OnInit, inject } from '@angular/core';
import { Course } from '../Models/course';
import { CourseService } from '../Services/course.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  coursesService = inject(CourseService);
  AllCourses
  ActiveRoute: ActivatedRoute = inject(ActivatedRoute)
  Query: string;
  ngOnInit(): void {
    this.ActiveRoute.queryParamMap.subscribe(data => {
      this.Query = data.get('search');
      if (this.Query === undefined || this.Query === null || this.Query === '') {
        // this.coursesService.getAllcourses().subscribe((data) => 
        // {
        //     this.AllCourses = data
        // });
        this.AllCourses = this.ActiveRoute.snapshot.data['course']
      } else {
        this.AllCourses = this.coursesService.courses.filter(data => {
          return data.title.toLowerCase().includes(this.Query.toLowerCase())
        })
      }

    })

  }
}
