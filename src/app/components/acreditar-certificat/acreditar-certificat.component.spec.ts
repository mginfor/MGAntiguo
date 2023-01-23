import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcreditarCertificatComponent } from './acreditar-certificat.component';

describe('AcreditarCertificatComponent', () => {
  let component: AcreditarCertificatComponent;
  let fixture: ComponentFixture<AcreditarCertificatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcreditarCertificatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcreditarCertificatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
