// Enums

import { Anamneasis } from "./anamneasis";
import { AntecedentesGeneralesFamiliares } from "./antecedentes-generales-familiares";
import { DatosGeneralesTriaje } from "./datos-generales-triaje";
import { Diagnostico } from "./diagnostico";
import { EspecialidadEnum } from "./especialidad-enum";
import { ExamenFisico } from "./examen-fisico";
import { ExamenesAuxiliares } from "./examenes-auxiliares";
import { FuncionesBiologicas } from "./funciones-biologicas";
import { SignosVitalesCFV } from "./signos-vitales-cfv";
import { Tratamiento } from "./tratamiento";












// Interfaz Principal
export interface HistoriaClinica {
  idHistoriaClinica?: number;
  numeroHistoriaClinica?: string;
  datosGeneralesTriaje?: DatosGeneralesTriaje;
  signosVitalesCFV?: SignosVitalesCFV;
  especialidad?: EspecialidadEnum;
  anamneasis?: Anamneasis;
  antecedentesGeneralesFamiliares?: AntecedentesGeneralesFamiliares;
  funcionesBiologicas?: FuncionesBiologicas;
  examenFisico?: ExamenFisico;
  examenesAuxiliares?: ExamenesAuxiliares;
  diagnosticos?: Diagnostico[];
  tratamiento?: Tratamiento;
  pacientePrimeraAtencion?: boolean;
  especialista?: string;
}
