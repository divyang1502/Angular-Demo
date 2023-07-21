import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudenstListComponent } from './studenst-list.component';

describe('StudenstListComponent', () => {
  let component: StudenstListComponent;
  let fixture: ComponentFixture<StudenstListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudenstListComponent]
    });
    fixture = TestBed.createComponent(StudenstListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
