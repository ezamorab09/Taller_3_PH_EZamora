import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonSearchbar, IonList, IonItem, IonLabel, SearchbarInputEventDetail, IonButton, IonButtons, IonIcon, IonModal, IonInput, IonGrid, IonRow, IonCol, IonImg } from '@ionic/angular/standalone';
import { IonSearchbarCustomEvent } from '@ionic/core';
import { DestinosdbService } from 'src/app/servicios/destinosdb.service';
import { addIcons } from 'ionicons';
import { heartOutline, trashOutline, cashOutline } from 'ionicons/icons'
import { Destinos } from 'src/app/modelo/destinos';
import { Camera, CameraResultType } from '@capacitor/camera'
import { DestinosParams, DestinosResponse, Feature } from 'src/app/www/IDestinosDb';
import { LugarDetalleResponse } from 'src/app/www/IDestinosDb';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.page.html',
  styleUrls: ['./busqueda.page.scss'],
  standalone: true,
  imports: [IonImg, IonCol, IonRow, IonGrid,
     IonInput, IonModal, IonIcon, IonButtons,
      IonButton, IonLabel, IonItem, IonList,
       IonSearchbar, IonContent, IonHeader,
        IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class BusquedaPage implements OnInit {

resultadoBusqueda: Feature[] = [];
//DestinosResponse[] = [];
favoritos: Destinos[] = []
destinoSeleccionado: Destinos | undefined = undefined
isModalPriceOpen: boolean = false;
precioAproxStr: string = ""
fotos:string[] = []
lugarDetalle: LugarDetalleResponse | null = null;

  constructor(
    private servicio: DestinosdbService    ) {
      addIcons({
        heartOutline,
        trashOutline,
        cashOutline,

      });
    }


  ngOnInit() { }

  async tomarFoto(){
    CameraResultType
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64
    })

    if( image.base64String != null || image.base64String != undefined ) {
      this.fotos.push(image.base64String)
    }
 }

 async handleInput($event: IonSearchbarCustomEvent<SearchbarInputEventDetail>) {
  const terminoBuscado = $event.detail.value ?? ''
  if(terminoBuscado == '') {
    this.resultadoBusqueda = [];
    return;
  }
  //const res = await this.servicio.getDestinos(terminoBuscado);
  //this.resultadoBusqueda = res.destino

  const params: DestinosParams = {
    lang: 'en',
    name: terminoBuscado,
    radius: 5000,
    lon: 0,
    lat: 0
  };
    const res = await this.servicio.getDestinos(params);
      this.resultadoBusqueda = [];
    }


  agregarAFavoritos(feature: Feature) {
    const destino: Destinos = this.convertirFeatureADestino(feature);
    this.favoritos.push(destino);
  }

  abrilModalPrecio(destinoSeleccionado: Destinos) {
    this.setModalPriceOpen(true)
    this.destinoSeleccionado = destinoSeleccionado;
  }

  guardarprecio() {
    if (this.destinoSeleccionado) {
      this.destinoSeleccionado.precioAprox = parseInt(this.precioAproxStr);
    }
    this.setModalPriceOpen(false);
  }

  setModalPriceOpen(abierto: boolean) {
    this.isModalPriceOpen = abierto;
  }

  cerrarModalPrecio() {
    this.isModalPriceOpen = false;
  }

  async obtenerDetalleLugar(lang: string, xid: string) {
    try {
      this.lugarDetalle = await this.servicio.getPlaceDetails(lang, xid);
    } catch (error) {
      console.error('Error al obtener detalles del lugar', error);
    }
  }

  cerrarDetalleLugar() {
    this.lugarDetalle = null;
  }

  private convertirFeatureADestino(feature: Feature): Destinos {
    return new Destinos(
      feature.properties.name,
      'Unknown',
    );
  }

}





