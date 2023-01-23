import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrechaComponent } from './brecha.component';

describe('BrechaComponent', () => {
  let component: BrechaComponent;
  let fixture: ComponentFixture<BrechaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrechaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
