import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentComponent } from './comment.component';
import { FormsModule } from '@angular/forms';

describe('CommentComponent', () => {
  let component: CommentComponent;
  let fixture: ComponentFixture<CommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommentComponent],
      providers: [FormsModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#click like ', () => {
    expect(component.likes).toBe(0, 'no like');
    component.like();
    expect(component.likes).toBe(1, 'click like');
    expect(component.dislikes).toBe(0, 'click like');
  });

  it('#click dislike', () => {
    expect(component.dislikes).toBe(0, '#click before');
    component.dislike();
    expect(component.dislikes).toBe(1, '#click after');
    expect(component.likes).toBe(0, '#click after');
  });
});
