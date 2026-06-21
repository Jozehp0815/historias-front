import { TipoDocumentoEnum } from "./tipo-ducumento-enum";

// Interfaces Secundarias
export interface DocumentoIdentidad {
  tipoDocumento?: TipoDocumentoEnum;
  numeroDocumento?: string;
}
