import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareDeveComponent } from './software-deve.component';

describe('SoftwareDeveComponent', () => {
  let component: SoftwareDeveComponent;
  let fixture: ComponentFixture<SoftwareDeveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SoftwareDeveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SoftwareDeveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
