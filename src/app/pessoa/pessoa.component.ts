import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { Pessoa } from './pessoa.model';
import { PessoaService } from './pessoa.service';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

  pessoas: Pessoa[];

  constructor(
    public _appService: AppService,
    private _router: Router,
    private _service: PessoaService
  ) {
    this.pessoas = [
      {
        "Id": 1,
        "Nome": "teste",
        "Cpf": "00000000191",
        "DataNascimento": "28/10/1988",
        "Estado": "PI",
        "Cidade": "teresina",
        "Cep": "64000000"
      }
    ];
  }

  ngOnInit(): void {
    if (!this._appService.isLoggedIn) {
      this._router.navigate(['login']);
      return;
    }
    this._service.getPessoas()
      .subscribe(data => {
        console.log(data);
        // this.pessoas = data.result;
      });
  }

  addPessoa(): void {
    this._router.navigate(['add-pessoa']);
  };

}
