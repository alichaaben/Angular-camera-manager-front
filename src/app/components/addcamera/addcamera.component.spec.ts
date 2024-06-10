import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcameraComponent } from './addcamera.component';

describe('AddcameraComponent', () => {
  let component: AddcameraComponent;
  let fixture: ComponentFixture<AddcameraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddcameraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddcameraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
