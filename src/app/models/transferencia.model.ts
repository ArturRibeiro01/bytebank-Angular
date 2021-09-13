export interface Root {
  transferencias: Transferencia[]
}

export interface Transferencia {
  id?: string
  valor: number | string
  destino: string | number
  data?: string
}



