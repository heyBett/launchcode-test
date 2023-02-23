export type quote = {
  id?: string;
  numericId?: number;
  name: string;
  from: string;
  destination: string;
  departure: Date;
  return: Date;
  people: number;
  transportation: string;
  service: boolean;
};

export type person = {
  id: number;
  name: string;
  time: string;
  message: string;
  image: string;
};

export type airport = {
  code: string;
  lat: string;
  lon: string;
  name: string;
  city: string;
  state: string;
  country: string;
  woeid: string;
  tz: string;
  phone?: string;
  type: string;
  email?: string;
  url?: string;
  runway_length?: string;
  elev?: string;
  icao: string;
  direct_flights: string;
  carriers: string;
};
