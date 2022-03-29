import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchxComponent } from './launchx.component';

describe('LaunchxComponent', () => {
  let component: LaunchxComponent;
  let fixture: ComponentFixture<LaunchxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaunchxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
