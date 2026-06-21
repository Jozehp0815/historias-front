import { TipoDiagnosticoEnum } from './tipo-diagnostico-enum';

export interface Diagnostico {
  idDiagnostico?: number;
  diagnosticoEstablecido?: string;
  cie10?: string;
  tipoDiagnostico?: TipoDiagnosticoEnum;
}
