import { Component, Output } from "@angular/core";
import { EventEmitter } from "stream";

@Component({
  selector:'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls:['./nova-transferencia.component.scss']
})

export class NovaTransferenciaComponent {

  //serve para enviar dados para outros compontentes
  @Output() aoTransferir = new EventEmitter();

  valor: number;
  destino: number;

  transferir(){
    this.aoTransferir.emit({
      valor: this.valor,
      destino:this.destino
    });

  }


}
