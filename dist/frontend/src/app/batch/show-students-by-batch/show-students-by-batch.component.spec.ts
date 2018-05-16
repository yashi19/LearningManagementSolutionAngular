import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowStudentsByBatchComponent } from './show-students-by-batch.component';

describe('ShowStudentsByBatchComponent', () => {
  let component: ShowStudentsByBatchComponent;
  let fixture: ComponentFixture<ShowStudentsByBatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowStudentsByBatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowStudentsByBatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
