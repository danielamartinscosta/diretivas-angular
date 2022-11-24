import { Component } from '@angular/core';

@Component({
  selector: 'app-tabelas',
  templateUrl: './tabelas.component.html',
  styleUrls: ['./tabelas.component.css']
})
export class TabelasComponent {

  constructor(){ }

  public produtos:any[] = [] //propriedade - lista que retorna dados a tabela / item publico que pode ser usado na tabela 

  ngOnInit(): void {  // ao iniciar a página, tras atraves do push, um objeto literal 
    this.produtos.push(
      {
        id: 1,
        nome:  'Banana',
        descricao: 'Uma banana nanica',
        preco: 5.5
      }
    )
    this.produtos.push(
      {
        id: 2,
        nome:  'Maça Pera',
        descricao: 'Uma maça pera',
        preco: 8.5
      }
    )



  }

}
