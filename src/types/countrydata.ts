import {
  ICountryCapitalInfo,
  ICountryCar,
  ICountryCoatOfArms,
  ICountryCurrencies,
  ICountryDemonyms,
  ICountryFlags,
  ICountryIDD,
  ICountryLanguage,
  ICountryMaps,
  ICountryName,
  ICountryPostalCode,
  ICountryTranslations,
} from "./types";

export interface ICountry {
  name: ICountryName;
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: ICountryCurrencies;
  idd: ICountryIDD;
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: ICountryLanguage;
  translations: ICountryTranslations;
  latlng: [number, number];
  landlocked: boolean;
  area: number;
  demonyms: ICountryDemonyms;
  flag: string;
  maps: ICountryMaps;
  population: number;
  fifa: string;
  car: ICountryCar;
  timezones: string[];
  continents: string[];
  flags: ICountryFlags;
  coatOfArms: ICountryCoatOfArms;
  startOfWeek: string;
  capitalInfo: ICountryCapitalInfo;
  postalCode: ICountryPostalCode;
}
