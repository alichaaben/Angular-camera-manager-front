import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CameraliveComponent } from './cameralive.component';

describe('CameraliveComponent', () => {
  let component: CameraliveComponent;
  let fixture: ComponentFixture<CameraliveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CameraliveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CameraliveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
