import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SidebarComponent } from '../../../../shared/sidebar.component/sidebar.component';
import { HistoriasClinicasService } from '../../service/historias-clinicas.service';
import { HistoriaClinica } from '../../model/historia-clinica-interface';

@Component({
  selector: 'app-historias-clinicas-ver-por-id',
  imports: [CommonModule, SidebarComponent, RouterLink],
  templateUrl: './historias-clinicas-ver-por-id.component.html',
  styleUrl: './historias-clinicas-ver-por-id.component.css',
})
export class HistoriasClinicasVerPorIdComponent implements OnInit {

  historiaClinica: HistoriaClinica | null = null;
  cargando = true;
  error = false;

  constructor(
    private route: ActivatedRoute,
    private service: HistoriasClinicasService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.service.getHistoriaClinicaById(id).subscribe({
        next: (data) => {
          this.historiaClinica = data;
          this.cargando = false;
          this.cdr.detectChanges();
        },
        error: (err) => {
          console.error('Error al cargar historia clínica:', err);
          this.error = true;
          this.cargando = false;
        }
      });
    }
  }
}
