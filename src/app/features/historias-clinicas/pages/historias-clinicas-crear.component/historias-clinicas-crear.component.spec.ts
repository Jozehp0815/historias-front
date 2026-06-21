import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriasClinicasCrearComponent } from './historias-clinicas-crear.component';

describe('HistoriasClinicasCrearComponent', () => {
  let component: HistoriasClinicasCrearComponent;
  let fixture: ComponentFixture<HistoriasClinicasCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoriasClinicasCrearComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HistoriasClinicasCrearComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
