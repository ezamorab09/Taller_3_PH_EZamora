export interface DestinosParams {
  lang: string;
  name: string;
  radius: number;
  lon: number;
  lat: number;
}

export interface DestinosResponse {
  type: string;
  features: Feature[];
  destino: Destino[];
}

export interface Feature {
  type: string;
  id: string;
  geometry: Geometry;
  properties: Properties;
}

export interface Geometry {
  type: string;
  coordinates: number[];
}

export interface Properties {
  xid: string;
  name: string;
  dist: number;
  rate: number;
  osm: string;
  wikidata?: string;
  kinds: string;
}

export interface Destino {
  destino: string;
}
//<-- API2 -->
export interface LugarDetalleResponse {
  xid: string;
  name: string;
  address: {
    road?: string;
    house_number?: string;
    suburb?: string;
    city?: string;
    state?: string;
    postcode?: string;
    country?: string;
    country_code?: string;
  };
  rate: number;
  wikidata?: string;
  kinds: string;
  osm: string;
  bbox: number[];
  point: {
    lon: number;
    lat: number;
  };
  url: string;
  wikipedia_extracts?: {
    title: string;
    text: string;
    html: string;
  };
  wikipedia?: string;
  image?: string;
  preview?: {
    source: string;
    width: number;
    height: number;
  };
  otm?: string;
}
