import { Component, OnInit } from '@angular/core';
import { MessagemService } from 'src/app/core/services/messagem.service';
import Livro from 'src/app/global/models/livro.model';
import { LivroService } from '../livro.service';


@Component({
  selector: 'app-listar-livros',
  templateUrl: './listar-livros.component.html',
  styleUrls: ['./listar-livros.component.scss']
})
export class ListarLivrosComponent implements OnInit {
  listaLivros: Livro[] = [];
  colunas = ['id', 'nome', 'editora', 'anoPublicacao' , 'isbn' , 'quantidade' , 'idAutor', 'acoes' ];
  constructor(private livroService : LivroService,private mensagemService:MessagemService) { }

  ngOnInit(): void {
    this.livroService.listarLivros().subscribe((res) => {
      console.log(res);
       this.listaLivros = res;
     });
  }
  excluir (row:Livro){
    if(confirm("Tem certeza que deseja deletar o livro? ")){
      this.livroService.deletarLivro(row.id).subscribe((res) => {
        console.log(res);
        this.mensagemService.success("O Livro foi deletado com sucesso!");
        this.ngOnInit();
       });
      console.log(row);
    }
    
  }

}
