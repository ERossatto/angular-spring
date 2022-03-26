import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../../shared/material/material.module';
import { CourseRoutingModule } from './course-routing.module';
import { CourseComponent } from './components/course.component';


@NgModule({
  declarations: [
    CourseComponent,
  ],
  imports: [
    CommonModule,
    CourseRoutingModule,
    MaterialModule,
  ],
})
export class CourseModule { }
