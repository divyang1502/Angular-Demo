import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordComponentComponent } from './password-component.component';

describe('PasswordComponentComponent', () => {
  let component: PasswordComponentComponent;
  let fixture: ComponentFixture<PasswordComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PasswordComponentComponent]
    });
    fixture = TestBed.createComponent(PasswordComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
