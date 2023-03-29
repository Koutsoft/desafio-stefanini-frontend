import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MessagemService } from 'src/app/core/services/messagem.service';
import Cliente from 'src/app/global/models/cliente.model';
import { ClienteService as ClienteService } from '../clientes.service';

@Component({
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.scss'],
})
export class ListarClientesComponent implements OnInit {
  clientes: Cliente[] = [];
  displayedColumns = ['nome', 'email', 'contato', 'acoes'];

  constructor(private clienteApi: ClienteService,private mensagemService:MessagemService) {}

  ngOnInit(): void {
    this.clienteApi.listarClientes().subscribe((res) => {
     console.log(res);
      this.clientes = res;
    });
  }
  excluir (row:Cliente){
    if(confirm("Tem certeza que deseja excluír o cliente? ")){
      this.clienteApi.deletarCliente(row.email).subscribe((res) => {
        console.log(res);
        this.mensagemService.success("O Cliente foi deletado com sucesso!");
        this.ngOnInit();
       });
      console.log(row);
    }
    
  }
}
