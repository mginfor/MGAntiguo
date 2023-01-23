import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalosComponent } from './talos.component';

describe('TalosComponent', () => {
  let component: TalosComponent;
  let fixture: ComponentFixture<TalosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TalosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TalosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
