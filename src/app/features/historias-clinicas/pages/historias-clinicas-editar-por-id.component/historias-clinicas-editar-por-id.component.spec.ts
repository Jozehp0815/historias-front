import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriasClinicasEditarPorIdComponent } from './historias-clinicas-editar-por-id.component';

describe('HistoriasClinicasEditarPorIdComponent', () => {
  let component: HistoriasClinicasEditarPorIdComponent;
  let fixture: ComponentFixture<HistoriasClinicasEditarPorIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoriasClinicasEditarPorIdComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HistoriasClinicasEditarPorIdComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
