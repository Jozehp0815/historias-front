import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HistoriaClinica } from '../../model/historia-clinica-interface';
import { SidebarComponent } from '../../../../shared/sidebar.component/sidebar.component';
import { HistoriasClinicasService } from '../../service/historias-clinicas.service';
import { EspecialidadEnum } from '../../model/especialidad-enum';
import { GeneroEnum } from '../../model/genero-enum';
import { EstadoCivilEnum } from '../../model/estado-civil-enum';
import { GradoInstruccionEnum } from '../../model/grado-instruccion-enum';
import { ReligionEnum } from '../../model/religion-enum';
import { TipoDocumentoEnum } from '../../model/tipo-ducumento-enum';
import { TipoDiagnosticoEnum } from '../../model/tipo-diagnostico-enum';
import { Diagnostico } from '../../model/diagnostico';

@Component({
  selector: 'app-historias-clinicas-crear.component',
  imports: [CommonModule, FormsModule, SidebarComponent, RouterLink],
  templateUrl: './historias-clinicas-crear.component.html',
  styleUrl: './historias-clinicas-crear.component.css',
})
export class HistoriasClinicasCrearComponent {

  historiaClinica: HistoriaClinica = {
    datosGeneralesTriaje: {
      documentoIdentidad: {
        tipoDocumento: TipoDocumentoEnum.DNI,
        numeroDocumento: ''
      },
      fechaAtencion: new Date().toISOString().substring(0, 10),
      horaAtencion: new Date().toTimeString().substring(0, 8),
      apellidos: '',
      nombres: '',
      genero: undefined,
      estadoCivil: undefined,
      fechaNacimiento: '',
      gradoInstruccion: undefined,
      edad: '',
      ocupacion: '',
      lugarNacimiento: '',
      telefono: '',
      domicilioActual: '',
      religion: undefined,
      datosAcompanante: ''
    },
    signosVitalesCFV: {
      frecuenciaCardiaca: '',
      presionArterial: '',
      saturaciónArterialOxígeno: '',
      temperatura: '',
      frecuenciaRespiratoria: '',
      peso: '',
      talla: '',
      imc: ''
    },
    especialidad: undefined,
    anamneasis: {
      anamneasisDiagnostico: ''
    },
    antecedentesGeneralesFamiliares: {
      medicos: '',
      qx: '',
      alergias: ''
    },
    funcionesBiologicas: {
      apetito: '',
      sed: '',
      sueno: '',
      estadoAnimo: '',
      deposicion: ''
    },
    examenFisico: {
      diagnosticoExamenFisico: ''
    },
    examenesAuxiliares: {
      laboratorio: '',
      dxPorImagenes: '',
      procedimientos: '',
      interconsulta: '',
      referencia: '',
      proximaCita: ''
    },
    diagnosticos: [],
    tratamiento: {
      tratamientoEstablecido: ''
    },
    pacientePrimeraAtencion: false,
    especialista: ''
  };

  // List arrays for select dropdowns
  especialidades = Object.values(EspecialidadEnum);
  generos = Object.values(GeneroEnum);
  estadosCiviles = Object.values(EstadoCivilEnum);
  gradosInstruccion = Object.values(GradoInstruccionEnum);
  religiones = Object.values(ReligionEnum);
  tiposDocumento = Object.values(TipoDocumentoEnum);
  tiposDiagnostico = Object.values(TipoDiagnosticoEnum);

  // Diagnosis temp state
  nuevoDiagnostico: Diagnostico = {
    diagnosticoEstablecido: '',
    cie10: '',
    tipoDiagnostico: undefined
  };

  activeTab: string = 'datosGenerales';

  constructor(
    private service: HistoriasClinicasService,
    private router: Router
  ) {}

  setActiveTab(tabId: string) {
    this.activeTab = tabId;
  }

  agregarDiagnostico() {
    if (this.nuevoDiagnostico.diagnosticoEstablecido && this.nuevoDiagnostico.cie10) {
      if (!this.historiaClinica.diagnosticos) {
        this.historiaClinica.diagnosticos = [];
      }
      this.historiaClinica.diagnosticos.push({ ...this.nuevoDiagnostico });
      this.nuevoDiagnostico = {
        diagnosticoEstablecido: '',
        cie10: '',
        tipoDiagnostico: undefined
      };
    } else {
      alert('Por favor complete el diagnóstico y el código CIE-10');
    }
  }

  eliminarDiagnostico(index: number) {
    if (this.historiaClinica.diagnosticos) {
      this.historiaClinica.diagnosticos.splice(index, 1);
    }
  }

  crearHistoriaClinica() {
    // Validate required fields (especially nested document identity)
    const doc = this.historiaClinica.datosGeneralesTriaje?.documentoIdentidad;
    if (!doc?.numeroDocumento) {
      alert('El número de documento es obligatorio.');
      return;
    }
    
    this.service.crearHistoriaClinica(this.historiaClinica).subscribe({
      next: (response) => {
        console.log('Historia Clínica creada con éxito:', response);
        this.router.navigate(['/historias-clinicas']);
      },
      error: (err) => {
        console.error('Error al crear historia clínica:', err);
        alert('Ocurrió un error al crear la historia clínica.');
      }
    });
  }

}
