import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pessoa } from './pessoa.model';

@Injectable()
export class PessoaService {

  private url = environment.AUTH_API + 'pessoa'

  constructor(
    private http: HttpClient
  ) { }

  getPessoas(): Observable<any> {
    return this.http.get(`${this.url}`);
  }

  getPessoaById(id: number): Observable<any> {
    return this.http.get(`${this.url}/${id}`);
  }

  createPessoa(pessoa: Object): Observable<Object> {
    return this.http.post(`${this.url}`, pessoa);
  }

  updatePessoa(id: number, value:any): Observable<Object> {
    return this.http.put(`${this.url}/${id}`, value);
  }

  deletePessoa(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`, { responseType: 'text' });
  }
}
