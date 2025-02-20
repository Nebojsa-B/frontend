export interface CountryDropdown {
  id: number,
  name: string,
  code: string,
  countryFlagUrl: string;
}

export interface CountryDetail {
  name: string,
  code: string
  lng: number,
  lat: number,
  zoom: number;
  geoJson: string;
  currency: string;
  countryFlagUrl: string;
}

export interface CountryDropdownDataWithLoading {
  data: CountryDropdown[],
  loading: boolean
}