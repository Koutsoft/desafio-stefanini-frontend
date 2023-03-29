import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import ApiUrl from 'src/app/global/constant/api-urls.constant';
import Livro from 'src/app/global/models/livro.model';

@Injectable({
  providedIn: 'root'
})
export class LivroService {
  constructor(private http: HttpClient) {}

  listarLivros(): Observable<Livro[]> {
    return this.http
      .get<Livro[]>(ApiUrl.listarLivros);
      
  }

  deletarLivro(id:number): Observable<void> {
    return this.http
      .delete<void>(ApiUrl.listarLivros + "/"+ id);
      
  }
}
