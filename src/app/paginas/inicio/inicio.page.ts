import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
//import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonGrid, IonRow, IonCol, IonImg, IonSearchbar, IonCard, IonCardTitle, IonCardHeader, IonCardSubtitle, IonCardContent, IonButtons, IonIcon } from '@ionic/angular/standalone';
//import { RouterModule } from '@angular/router';
import { CambioMonedaComponent } from 'src/app/modal/cambio-moneda/cambio-moneda.component';
import { ModalController, IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { heartOutline, trashOutline, cashOutline, cartOutline } from 'ionicons/icons'
import { LugaresFavoritos } from 'src/app/modelo/destinos';
import { FavoritosService } from 'src/app/servicios/favoritos.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [CambioMonedaComponent, CommonModule, IonicModule ],
  providers: [ModalController]
})

export class InicioPage implements OnInit {

  destinos: LugaresFavoritos[] = [];
  destinosFiltrados: LugaresFavoritos[] = [];


  constructor(
    private router: Router,
    private modalController: ModalController,
    private favoritosService: FavoritosService
    ) {
      addIcons({
        heartOutline,
        trashOutline,
        cashOutline,
        cartOutline

      });

     }

  ngOnInit() {
    this.loadDestinos();
  }

  loadDestinos() {
    this.destinos = [
  { ciudad: 'Casablanca', pais: 'Marruecos', imagen: 'assets/imagenesapp/africa/casablanca.jpg', valor: 1000 },
  { ciudad: 'Ciudad del cabo', pais: 'SudAfrica', imagen:'assets/imagenesapp/africa/ciudaddelcabo.jpg', valor: 1200 },
  { ciudad: 'Marrakesh', pais: 'Marruecos', imagen:'assets/imagenesapp/africa/marrakesh.jpg', valor: 1400 },
  { ciudad: 'Cancun', pais: 'Mexico', imagen:'assets/imagenesapp/americadelnorte/cancun.jpg', valor: 1600},
  { ciudad: 'Neuva York', pais: 'EEUU', imagen:'assets/imagenesapp/americadelnorte/nuevayork.jpg', valor: 1800},
  { ciudad: 'Vancuver', pais: 'Canada', imagen:'assets/imagenesapp/americadelnorte/vancuver.jpg', valor: 2000},
  { ciudad: 'Buenos Aires', pais: 'Argentina', imagen:'assets/imagenesapp/americadelsur/buenosaires.jpg', valor: 2200},
  { ciudad: 'Mancora', pais: 'Peru', imagen:'assets/imagenesapp/americadelsur/mancora.jpg', valor: 2400 },
  { ciudad: 'Rio de Janeiro', pais: 'Brazil', imagen:'assets/imagenesapp/americadelsur/riodejaneiro.jpg', valor: 2600 },
  { ciudad: 'Bangkok', pais: 'Tailandia', imagen:'assets/imagenesapp/asia/bankok.jpg', valor: 2800 },
  { ciudad: 'Beijin', pais: 'China', imagen:'assets/imagenesapp/asia/beijin.jpg', valor: 3000 },
  { ciudad: 'Tokyo', pais: 'Japon', imagen:'assets/imagenesapp/asia/tokyo.jpg', valor: 3200 },
  { ciudad: 'Monte Aconcagua', pais: 'Chile', imagen:'assets/imagenesapp/americadelsur/aconcagua.jpg', valor: 3400 },
  { ciudad: 'San Pedro de Atacama', pais: 'Chile', imagen:'assets/imagenesapp/americadelsur/sanpedrodeatacama.jpg', valor: 3600 },
  { ciudad: 'Torres del Paine', pais: 'Chile', imagen:'assets/imagenesapp/americadelsur/torresdelpaine.jpg', valor: 3800 },
  { ciudad: 'Londres', pais: 'Inglaterra', imagen:'assets/imagenesapp/europa/londres.jpg', valor: 4000 },
  { ciudad: 'Paris', pais: 'Francia', imagen:'assets/imagenesapp/europa/paris.jpg', valor: 4200 },
  { ciudad: 'Roma', pais: 'Italia', imagen:'assets/imagenesapp/europa/roma.jpg', valor: 4400 },
  { ciudad: 'Auckland', pais: 'Nueva Zelandia', imagen:'assets/imagenesapp/oceania/auckand.jpg', valor: 4600 },
  { ciudad: 'Suva', pais: 'Fiji', imagen:'assets/imagenesapp/oceania/fiji.jpg', valor: 4800 },
  { ciudad: 'Sydney', pais: 'Australia', imagen:'assets/imagenesapp/oceania/sydney.jpg', valor: 5000 },


      ];

      const randomIndex = Math.floor(Math.random() * this.destinos.length);
      this.destinosFiltrados = [this.destinos[randomIndex]];

  }

  filterDestinos(ciudad: string | null | undefined) {
    if (!ciudad || ciudad.trim() === '') {
      // Si no hay texto en la búsqueda, mostramos todos los destinos
      this.destinosFiltrados = this.destinos;

    } else {
      this.destinosFiltrados = this.destinos.filter(destino =>
        destino.ciudad.toLowerCase().includes(ciudad.toLowerCase())
      );
    }

  }

  mostrarDestino(destino: any) {
    // Método opcional para mostrar o no mostrar un destino específico
    return this.destinosFiltrados.includes(destino);
  }

  async openCambioMoneda(valor: number) {}

  addToFavorites(destino: LugaresFavoritos) {
    this.favoritosService.addFavorito(destino);
  }

  deleteDestino(destino: LugaresFavoritos) {
    this.destinosFiltrados = this.destinosFiltrados.filter(d => d !== destino);
  }

  async openModal(valor: string) {
    const modal = await this.modalController.create({
      component: CambioMonedaComponent,
      componentProps: { valorUSD: parseFloat(valor) }
    });
    return await modal.present();
  }

  irAFavoritos() {
    this.router.navigate(['/favoritos']);
  }


  goToSearchPage(): void {
    this.router.navigateByUrl('/busqueda');
  }

}

