import { DocumentoIdentidad } from "./documento-identidad";
import { EspecialidadEnum } from "./especialidad-enum";

export interface HistoriasClinicas {
    idHistoriaClinica: number;
    documentoIdentidad: DocumentoIdentidad;
    apellidos: string;
    nombres: string;
    especialidad: EspecialidadEnum;
    pacientePrimeraAtencion: boolean;
    fechaAtencion: Date;       // LocalDate → Date
    horaAtencion: string;      // LocalTime → string (ej. "14:30:00")
}

