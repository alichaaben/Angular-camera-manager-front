import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecameraComponent } from './updatecamera.component';

describe('UpdatecameraComponent', () => {
  let component: UpdatecameraComponent;
  let fixture: ComponentFixture<UpdatecameraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdatecameraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdatecameraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
