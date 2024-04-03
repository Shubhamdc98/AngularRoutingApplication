import { inject } from "@angular/core"
import { CourseService } from "./Services/course.service"

export const resolve = () => {
    const courses : CourseService = inject(CourseService)
    return courses.getAllcourses();
}
