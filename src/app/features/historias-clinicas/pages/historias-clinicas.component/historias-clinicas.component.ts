import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { HistoriasClinicasService } from '../../service/historias-clinicas.service';
import { SidebarComponent } from '../../../../shared/sidebar.component/sidebar.component';
import { HistoriasClinicas } from '../../model/historias-clinicas-interface';
import { EspecialidadEnum } from '../../model/especialidad-enum';

@Component({
  selector: 'app-historias-clinicas.component',
  imports: [CommonModule, FormsModule, SidebarComponent, RouterLink],
  templateUrl: './historias-clinicas.component.html',
  styleUrl: './historias-clinicas.component.css',
})
export class HistoriasClinicasComponent implements OnInit {

  historiasClinicas : HistoriasClinicas[] = [];

  // Search parameters
  searchType: string = 'todos';
  searchValue: string = '';
  especialidades = Object.values(EspecialidadEnum);

  constructor(
    private historiasClinicasService: HistoriasClinicasService,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.cargarHistoriasClinicas();
  }

  cargarHistoriasClinicas() {
    this.historiasClinicasService.getHistoriasClinicas().subscribe({
      next: (data) => {
        this.historiasClinicas = data;
        this.cdr.detectChanges();
        console.log('Historias clínicas cargadas:', data);
      },
      error: (err) => console.error('Error al cargar historias clínicas:', err)
    });
  }

  buscarHistoriasClinicas() {
    if (this.searchType === 'todos' || !this.searchValue) {
      this.cargarHistoriasClinicas();
      return;
    }

    const value = this.searchValue.trim();
    if (!value) return;

    let searchObs;
    switch (this.searchType) {
      case 'numeroDocumento':
        searchObs = this.historiasClinicasService.findHistoriasClinicasByNumeroDocumento(value);
        break;
      case 'especialidad':
        searchObs = this.historiasClinicasService.findHistoriasClinicasByEspecialidad(value as EspecialidadEnum);
        break;
      case 'nombres':
        searchObs = this.historiasClinicasService.findHistoriasClinicasByNombres(value);
        break;
      case 'apellidos':
        searchObs = this.historiasClinicasService.findHistoriasClinicasByApellidos(value);
        break;
      default:
        this.cargarHistoriasClinicas();
        return;
    }

    searchObs.subscribe({
      next: (data) => {
        this.historiasClinicas = data;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error al buscar historias clínicas:', err);
        this.historiasClinicas = [];
        this.cdr.detectChanges();
      }
    });
  }

  limpiarBusqueda() {
    this.searchType = 'todos';
    this.searchValue = '';
    this.cargarHistoriasClinicas();
  }

  eliminarHistoria(id: number) {
    if (confirm('¿Está seguro de que desea eliminar esta historia clínica? Esta acción no se puede deshacer.')) {
      this.historiasClinicasService.eliminarHistoriaClinica(id).subscribe({
        next: () => {
          console.log(`Historia clínica con ID ${id} eliminada.`);
          this.cargarHistoriasClinicas();
        },
        error: (err) => {
          console.error('Error al eliminar historia clínica:', err);
          alert('No se pudo eliminar la historia clínica.');
        }
      });
    }
  }

  descargarPdf(id: number) {
    this.historiasClinicasService.descargarPdf(id).subscribe({
      next: (blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `HistoriaClinica_${id}.pdf`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      },
      error: (err) => console.error('Error al descargar PDF:', err)
    });
  }

}
