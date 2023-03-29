import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import ApiUrl from 'src/app/global/constant/api-urls.constant';
import Autor from 'src/app/global/models/autor.model';

@Injectable({
  providedIn: 'root'
})
export class AutorService {
  constructor(private http: HttpClient) {}

  listarAutores(): Observable<Autor[]> {
    return this.http
      .get<Autor[]>(ApiUrl.listarAutores);
      
  }

  deletarAutor(id:number): Observable<void> {
    return this.http
      .delete<void>(ApiUrl.listarAutores + "/"+ id);
      
  }
}
