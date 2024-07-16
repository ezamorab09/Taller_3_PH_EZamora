import { Injectable } from '@angular/core';
import { LugaresFavoritos } from '../modelo/destinos';

@Injectable({
  providedIn: 'root'
})

export class FavoritosService {

  private favoritos: LugaresFavoritos[] = [];

  constructor() { }

  getFavoritos(): LugaresFavoritos[] {
    return this.favoritos;
  }

  addFavorito(destino: LugaresFavoritos): void {
    if(!this.favoritos.some(f=> f.ciudad === destino.ciudad && f.pais === destino.pais)) {
      this.favoritos.push(destino);
    }

  }
}
