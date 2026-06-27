import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriasClinicasVerPorIdComponent } from './historias-clinicas-ver-por-id.component';

describe('HistoriasClinicasVerPorIdComponent', () => {
  let component: HistoriasClinicasVerPorIdComponent;
  let fixture: ComponentFixture<HistoriasClinicasVerPorIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoriasClinicasVerPorIdComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HistoriasClinicasVerPorIdComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
