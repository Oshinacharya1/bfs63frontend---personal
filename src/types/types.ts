interface INativeName {
  [key: string]: {
    official: string;
    common: string;
  };
}

export interface ICountryName {
  common: string;
  official: string;
  nativeName: INativeName;
}

export interface ICountryCurrencies {
  [key: string]: {
    name: string;
    symbol: string;
  };
}

export interface ICountryIDD {
  root: string;
  suffixes: string[];
}

export interface ICountryLanguage {
  [key: string]: string;
}

export interface ICountryTranslations {
  [key: string]: {
    official: string;
    common: string;
  };
}

export interface ICountryDemonyms {
  eng: {
    f: string;
    m: string;
  };
  fra: {
    f: string;
    m: string;
  };
}

export interface ICountryMaps {
  googleMaps: string;
  openStreetMaps: string;
}

export interface ICountryCar {
  signs: string[];
  side: string;
}

export interface ICountryFlags {
  png: string;
  svg: string;
}

export interface ICountryCoatOfArms {
  png?: string;
  svg?: string;
}

export interface ICountryCapitalInfo {
  latlng: [number, number];
}

export interface ICountryPostalCode {
  format: string;
  regex: string;
}
