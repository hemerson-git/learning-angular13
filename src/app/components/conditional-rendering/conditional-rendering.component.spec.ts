import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionalRenderingComponent } from './conditional-rendering.component';

describe('ConditionalRenderingComponent', () => {
  let component: ConditionalRenderingComponent;
  let fixture: ComponentFixture<ConditionalRenderingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConditionalRenderingComponent]
    });
    fixture = TestBed.createComponent(ConditionalRenderingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
