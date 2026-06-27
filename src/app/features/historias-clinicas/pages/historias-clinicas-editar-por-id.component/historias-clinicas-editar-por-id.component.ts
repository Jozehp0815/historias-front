import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { SidebarComponent } from '../../../../shared/sidebar.component/sidebar.component';
import { HistoriasClinicasService } from '../../service/historias-clinicas.service';
import { HistoriaClinica } from '../../model/historia-clinica-interface';
import { EspecialidadEnum } from '../../model/especialidad-enum';
import { GeneroEnum } from '../../model/genero-enum';
import { EstadoCivilEnum } from '../../model/estado-civil-enum';
import { GradoInstruccionEnum } from '../../model/grado-instruccion-enum';
import { ReligionEnum } from '../../model/religion-enum';
import { TipoDocumentoEnum } from '../../model/tipo-ducumento-enum';
import { TipoDiagnosticoEnum } from '../../model/tipo-diagnostico-enum';
import { Diagnostico } from '../../model/diagnostico';

@Component({
  selector: 'app-historias-clinicas-editar-por-id',
  imports: [CommonModule, FormsModule, SidebarComponent, RouterLink],
  templateUrl: './historias-clinicas-editar-por-id.component.html',
  styleUrl: './historias-clinicas-editar-por-id.component.css',
})
export class HistoriasClinicasEditarPorIdComponent implements OnInit {

  historiaClinica: HistoriaClinica | null = null;
  idHistoria!: number;
  activeTab: string = 'datosGenerales';

  especialidades = Object.values(EspecialidadEnum);
  generos = Object.values(GeneroEnum);
  estadosCiviles = Object.values(EstadoCivilEnum);
  gradosInstruccion = Object.values(GradoInstruccionEnum);
  religiones = Object.values(ReligionEnum);
  tiposDocumento = Object.values(TipoDocumentoEnum);
  tiposDiagnostico = Object.values(TipoDiagnosticoEnum);

  nuevoDiagnostico: Diagnostico = {
    diagnosticoEstablecido: '',
    cie10: '',
    tipoDiagnostico: undefined
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: HistoriasClinicasService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.idHistoria = Number(this.route.snapshot.paramMap.get('id'));
    if (this.idHistoria) {
      this.obtenerHistoriaClinica(this.idHistoria);
    }
  }

  obtenerHistoriaClinica(id: number) {
    this.service.getHistoriaClinicaById(id).subscribe({
      next: (data) => {
        this.historiaClinica = data;
        this.cdr.detectChanges();
        if (!this.historiaClinica.datosGeneralesTriaje) this.historiaClinica.datosGeneralesTriaje = {};
        if (!this.historiaClinica.datosGeneralesTriaje.documentoIdentidad) this.historiaClinica.datosGeneralesTriaje.documentoIdentidad = {};
        if (!this.historiaClinica.signosVitalesCFV) this.historiaClinica.signosVitalesCFV = {};
        if (!this.historiaClinica.anamneasis) this.historiaClinica.anamneasis = {};
        if (!this.historiaClinica.antecedentesGeneralesFamiliares) this.historiaClinica.antecedentesGeneralesFamiliares = {};
        if (!this.historiaClinica.funcionesBiologicas) this.historiaClinica.funcionesBiologicas = {};
        if (!this.historiaClinica.examenFisico) this.historiaClinica.examenFisico = {};
        if (!this.historiaClinica.examenesAuxiliares) this.historiaClinica.examenesAuxiliares = {};
        if (!this.historiaClinica.tratamiento) this.historiaClinica.tratamiento = {};
        if (!this.historiaClinica.diagnosticos) this.historiaClinica.diagnosticos = [];
      },
      error: (err) => console.error('Error al obtener historia clínica:', err)
    });
  }

  setActiveTab(tabId: string) {
    this.activeTab = tabId;
  }

  agregarDiagnostico() {
    if (this.nuevoDiagnostico.diagnosticoEstablecido && this.nuevoDiagnostico.cie10) {
      this.historiaClinica!.diagnosticos!.push({ ...this.nuevoDiagnostico });
      this.nuevoDiagnostico = { diagnosticoEstablecido: '', cie10: '', tipoDiagnostico: undefined };
    } else {
      alert('Por favor complete el diagnóstico y el código CIE-10');
    }
  }

  eliminarDiagnostico(index: number) {
    this.historiaClinica!.diagnosticos!.splice(index, 1);
  }

  actualizarHistoriaClinica() {
    if (!this.historiaClinica) return;
    this.service.actualizarHistoriaClinica(this.idHistoria, this.historiaClinica).subscribe({
      next: () => {
        console.log('Historia clínica actualizada con éxito.');
        this.router.navigate(['/historias-clinicas']);
      },
      error: (err) => console.error('Error al actualizar historia clínica:', err)
    });
  }
}
