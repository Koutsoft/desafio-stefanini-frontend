import { Component, OnInit } from '@angular/core';
import { MessagemService } from 'src/app/core/services/messagem.service';
import Autor from 'src/app/global/models/autor.model';
import Cliente from 'src/app/global/models/cliente.model';
import { AutorService } from '../autor.service';

@Component({
  selector: 'app-listar-autores',
  templateUrl: './listar-autores.component.html',
  styleUrls: ['./listar-autores.component.scss']
})
export class ListarAutoresComponent implements OnInit {

  listaAutores: Autor[] = [];
  colunas = ['id', 'email', 'isni', 'nome' , 'biografia' , 'dataNascimento' , 'acoes' ];
  constructor(private autorService : AutorService,private mensagemService:MessagemService) { }

  ngOnInit(): void {
    this.autorService.listarAutores().subscribe((res) => {
      console.log(res);
       this.listaAutores = res;
     });
  }


  excluir (row:Autor){
    if(confirm("Tem certeza que deseja excluir o autor? ")){
      this.autorService.deletarAutor(row.id).subscribe((res) => {
        console.log(res);
        this.mensagemService.success("O Autor foi deletado com sucesso!");
        this.ngOnInit();
       });
      console.log(row);
    }
    
  }
}
