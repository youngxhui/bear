import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseComponent } from './course.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CourseComponent', () => {
  let component: CourseComponent;
  let fixture: ComponentFixture<CourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseComponent],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
