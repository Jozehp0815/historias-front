import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { HistoriasClinicas } from '../model/historias-clinicas-interface';
import { HistoriaClinica } from '../model/historia-clinica-interface';
import { EspecialidadEnum } from '../model/especialidad-enum';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HistoriasClinicasService {

  
  private API: string = environment.apiUrl;

  
  constructor(private http: HttpClient) {}

  //  GET (LISTAR)
  getHistoriasClinicas(): Observable<HistoriasClinicas[]> {
    return this.http.get<HistoriasClinicas[]>(this.API, { withCredentials: true });
  }

  
  //  GET (BUSCAR POR ID)
  getHistoriaClinicaById(id: number): Observable<HistoriaClinica> {
    return this.http.get<HistoriaClinica>(`${this.API}/${id}`, { withCredentials: true });
  }

  //  POST (CREAR)
  crearHistoriaClinica(HistoriaClinica: HistoriaClinica): Observable<HistoriaClinica> {
    return this.http.post<HistoriaClinica>(this.API, HistoriaClinica, { withCredentials: true });
  }

  // PUT (ACTUALIZAR)
  actualizarHistoriaClinica(id: number, historiaClinica: HistoriaClinica): Observable<HistoriaClinica> {
    return this.http.put<HistoriaClinica>(`${this.API}/${id}`, historiaClinica, { withCredentials: true });
  }

  //  DELETE (ELIMINAR)
  eliminarHistoriaClinica(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API}/${id}`, { withCredentials: true });
  }

  // GET (BUSCAR POR NUMERO DOCUMENTO)
  findHistoriasClinicasByNumeroDocumento(numeroDocumento: string): Observable<HistoriasClinicas[]> {
    return this.http.get<HistoriasClinicas[]>(`${this.API}/buscar/numeroDocumento`, {
      params: { numeroDocumento },
      withCredentials: true
    });
  }

  // GET (BUSCAR POR ESPECIALIDAD)
  findHistoriasClinicasByEspecialidad(especialidad: EspecialidadEnum): Observable<HistoriasClinicas[]> {
    return this.http.get<HistoriasClinicas[]>(`${this.API}/buscar/especialidad`, {
      params: { especialidad },
      withCredentials: true
    });
  }

  // GET (BUSCAR POR NOMBRES)
  findHistoriasClinicasByNombres(nombres: string): Observable<HistoriasClinicas[]> {
    return this.http.get<HistoriasClinicas[]>(`${this.API}/buscar/nombres`, {
      params: { nombres },
      withCredentials: true
    });
  }

  // GET (BUSCAR POR APELLIDOS)
  findHistoriasClinicasByApellidos(apellidos: string): Observable<HistoriasClinicas[]> {
    return this.http.get<HistoriasClinicas[]>(`${this.API}/buscar/apellidos`, {
      params: { apellidos },
      withCredentials: true
    });
  }

  descargarPdf(id: number): Observable<Blob> {
    return this.http.get(`${this.API}/${id}/pdf`, {
      responseType: 'blob',
      withCredentials: true
    });
  }

}
