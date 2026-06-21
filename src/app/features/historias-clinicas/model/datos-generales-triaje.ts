import { DocumentoIdentidad } from "./documento-identidad";
import { EstadoCivilEnum } from "./estado-civil-enum";
import { GeneroEnum } from "./genero-enum";
import { GradoInstruccionEnum } from "./grado-instruccion-enum";
import { ReligionEnum } from "./religion-enum";

export interface DatosGeneralesTriaje {
  documentoIdentidad?: DocumentoIdentidad;
  fechaAtencion?: string; // Formato YYYY-MM-DD (LocalDate)
  horaAtencion?: string;  // Formato HH:mm:ss (LocalTime)
  apellidos?: string;
  nombres?: string;
  genero?: GeneroEnum;
  estadoCivil?: EstadoCivilEnum;
  fechaNacimiento?: string; // Formato YYYY-MM-DD
  gradoInstruccion?: GradoInstruccionEnum;
  edad?: string;
  ocupacion?: string;
  lugarNacimiento?: string;
  telefono?: string;
  domicilioActual?: string;
  religion?: ReligionEnum;
  datosAcompanante?: string; // Mapeado desde 'datosAcompañante' mediante @JsonProperty("datosAcompanante")
}