import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiggyComponent } from './swiggy.component';

describe('SwiggyComponent', () => {
  let component: SwiggyComponent;
  let fixture: ComponentFixture<SwiggyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SwiggyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwiggyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
