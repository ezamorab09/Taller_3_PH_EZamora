import { Injectable } from '@angular/core';
import { Destinos } from '../modelo/destinos';
import { DestinosParams, DestinosResponse, LugarDetalleResponse  } from '../www/IDestinosDb';
import { CapacitorHttp, HttpOptions } from '@capacitor/core';


@Injectable({
  providedIn: 'root'
})
export class DestinosdbService {

  private apiUrl: string = "http://api.opentripmap.com/0.1"
  private apiKey: string = "5ae2e3f221c38a28845f05b69afab088697d02fba2f2ebc2c1895ee4";

  constructor() { }

  async getDestinos(params: DestinosParams): Promise<DestinosResponse> {
    const options: HttpOptions = {
      url: `${this.apiUrl}/${params.lang}/places/autosuggest`,
      params: {
        apikey: this.apiKey,
        lang: params.lang,
        name: params.name,
        radius: params.radius.toString(),
        lon: params.lon.toString(),
        lat: params.lat.toString(),
      },
    };

    const response = await CapacitorHttp.get(options);
    return response.data as DestinosResponse;
  }
  async getPlaceDetails(lang: string, xid: string): Promise<LugarDetalleResponse> {
    const options: HttpOptions = {
      url: `${this.apiUrl}/${lang}/places/xid/${xid}`,
      params: {
        apikey: this.apiKey,
      },
    };

    const response = await CapacitorHttp.get(options);
    return response.data as LugarDetalleResponse;
  }
}





