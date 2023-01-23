import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetenciasCriticasComponent } from './competencias-criticas.component';

describe('CompetenciasCriticasComponent', () => {
  let component: CompetenciasCriticasComponent;
  let fixture: ComponentFixture<CompetenciasCriticasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompetenciasCriticasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetenciasCriticasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
