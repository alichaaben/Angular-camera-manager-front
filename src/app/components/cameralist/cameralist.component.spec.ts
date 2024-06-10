import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CameralistComponent } from './cameralist.component';

describe('CameralistComponent', () => {
  let component: CameralistComponent;
  let fixture: ComponentFixture<CameralistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CameralistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CameralistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
