import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import { IonContent, IonHeader, IonTitle,
  // IonToolbar, IonIcon, IonCardContent,
    //IonGrid, IonRow, IonCol, IonCard, IonImg,
     //IonCardHeader, IonCardSubtitle, IonCardTitle,
     //IonButton, IonList, IonItem } from '@ionic/angular/standalone';
import { LugaresFavoritos } from 'src/app/modelo/destinos';
import { ModalController, IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { FavoritosService } from 'src/app/servicios/favoritos.service';
import { addIcons } from 'ionicons';
import { arrowBackOutline } from 'ionicons/icons'

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,
      ]
})
export class FavoritosPage implements OnInit {

  favoritos: LugaresFavoritos[] = [];


  constructor(
    private router: Router,
    private modalController: ModalController,
    private favoritosService : FavoritosService

  ) {
    addIcons({
      arrowBackOutline
    });
   }

  ngOnInit() {
    this.favoritos = this.favoritosService.getFavoritos();
    

  }

  addToFavorites(destino: LugaresFavoritos) {
    // Agrega el destino a la lista de favoritos si no está ya presente
    if (!this.favoritos.includes(destino)) {
      this.favoritos.push(destino);
    }
  }

  volverAInicio() {
    this.router.navigate(['/inicio']);
  }

  goToSearchPage(): void {
    this.router.navigateByUrl('/inicio');
  }
}




