import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriasClinicasComponent } from './historias-clinicas.component';

describe('HistoriasClinicasComponent', () => {
  let component: HistoriasClinicasComponent;
  let fixture: ComponentFixture<HistoriasClinicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoriasClinicasComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HistoriasClinicasComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
