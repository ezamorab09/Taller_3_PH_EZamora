export class Destinos{

  constructor(

    public ciudad: string,
    public país: string,
    public imagen: string = "",
    public precioAprox?: number
  ) {}

}

export class LugaresFavoritos {
  constructor(
    public ciudad: string,
    public pais: string,
    public imagen: string,
    public valor: number
  ) {}
}


