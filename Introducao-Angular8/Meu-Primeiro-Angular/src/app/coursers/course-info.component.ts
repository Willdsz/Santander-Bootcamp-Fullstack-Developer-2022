import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "./course";
import { CourseService } from "./courses.service";

@Component({
    templateUrl: './course-info.component.html'
})

export class CourseInfoComponent implements OnInit{

    course: Course;

    constructor(private activedRoute: ActivatedRoute, private courseService: CourseService) {}

    ngOnInit(): void {
        this.course = this.courseService.retrieveById(+this.activedRoute.snapshot.paramMap.get('id'));
    }

    save(): void {

    }
}