import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatecodeComponent } from './validatecode.component';

describe('ValidatecodeComponent', () => {
  let component: ValidatecodeComponent;
  let fixture: ComponentFixture<ValidatecodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValidatecodeComponent]
    });
    fixture = TestBed.createComponent(ValidatecodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
