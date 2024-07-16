import { Component, OnInit, Input, NgModule } from '@angular/core';
import { ModalController, IonicModule } from '@ionic/angular'
//import { IonHeader, IonToolbar, IonTitle, IonButton, IonContent, IonItem, IonLabel, IonButtons, IonInput } from "@ionic/angular/standalone";
import { FormsModule } from '@angular/forms';
import { LugaresFavoritos } from 'src/app/modelo/destinos';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-cambio-moneda',
  templateUrl: './cambio-moneda.component.html',
  styleUrls: ['./cambio-moneda.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule,IonicModule ]
})
export class CambioMonedaComponent  implements OnInit {


  @Input() valorUSD: string = "";
  destinos: LugaresFavoritos[] = [];
  pesosChilenos: number[] = [];
  valorLocal: number = 0;
  valorConvertido: number = 0;
  fechaCotizacion: string = "";

  constructor(private modalController: ModalController) {
    this.valorUSD = '';
  }


  ngOnInit() {

    this.fechaCotizacion = new Date().toLocaleDateString();

    this.convertir();

  }

  convertir() {
    //this.pesosChilenos = this.destinos.map(destino =>
    //  destino.valor * this.valorLocal
    //);
    if (this.valorUSD && this.valorLocal) {
      this.valorConvertido = parseFloat(this.valorUSD) * this.valorLocal;
    }

  }

  cerrar() {
    this.modalController.dismiss();
    this.valorLocal = 0; // Reiniciar el valor local al cerrar el modal
    this.valorConvertido = 0;

  }

}
