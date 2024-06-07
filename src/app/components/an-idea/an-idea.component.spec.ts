import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnIdeaComponent } from './an-idea.component';

describe('AnIdeaComponent', () => {
  let component: AnIdeaComponent;
  let fixture: ComponentFixture<AnIdeaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnIdeaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnIdeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
