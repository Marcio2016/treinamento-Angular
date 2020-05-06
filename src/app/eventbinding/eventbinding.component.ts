import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent {

  nome = 'Márcio';

  adicionar() {
    console.log(`Adicionando ${this.nome}`);

  }

  alterarNome(event: any){
    console.log(event);
    this.nome = event.target.value;
  }

}
