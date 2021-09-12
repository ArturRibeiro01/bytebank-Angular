import { Component, Output, EventEmitter} from "@angular/core";

@Component({
  selector:'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls:['./nova-transferencia.component.scss']
})

export class NovaTransferenciaComponent {


  @Output() paraTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;


  transferir(){
    const valorEmitir = {
      valor: this.valor,
      destino: this.destino
    };
    this.paraTransferir.emit(valorEmitir);
    this.limparCampos();

  }

  limparCampos(){
    this.valor = null;
    this.destino = null
  }

}
