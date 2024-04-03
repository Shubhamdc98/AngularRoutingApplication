import { inject, Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../../Services/course.service';
import { Course } from '../../Models/course';
@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css','./course-extradetails.component.css',
  'course-extraordinarydetails.component.css','course-detailOrdinary.component.css']
})
export class CourseDetailComponent implements OnInit, OnDestroy{
  selectedCourse: Course;
  courseId: number;
  OnSubscribe

  ActiveRoute : ActivatedRoute = inject(ActivatedRoute)
  CurrentCourse : CourseService = inject(CourseService)


  ngOnInit(): void {
    // //this.courseId = this.ActiveRoute.snapshot.params['id']
    // this.courseId = +this.ActiveRoute.snapshot.paramMap.get('id') // + will change string to number as ParamMap will return string...
    // this.selectedCourse = this.CurrentCourse.courses.find(course => course.id === this.courseId)

    this.OnSubscribe = this.ActiveRoute.paramMap.subscribe((data) => {
      this.courseId = +data.get('id')
      
      this.selectedCourse = this.CurrentCourse.courses.find(course => course.id === this.courseId)
    })

    this.ActiveRoute.fragment.subscribe((data) => {
      console.log(data)
      this.jumpTo(data)
    })
    
  }

  ngOnDestroy(): void {
    this.OnSubscribe.unsubscribe();
  }
  
  jumpTo(value : string){
    document.getElementById(value).scrollIntoView({behavior:'auto'})
  }

}
