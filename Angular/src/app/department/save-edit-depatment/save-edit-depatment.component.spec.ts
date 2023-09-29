import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveEditDepatmentComponent } from './save-edit-depatment.component';

describe('SaveEditDepatmentComponent', () => {
  let component: SaveEditDepatmentComponent;
  let fixture: ComponentFixture<SaveEditDepatmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaveEditDepatmentComponent]
    });
    fixture = TestBed.createComponent(SaveEditDepatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
