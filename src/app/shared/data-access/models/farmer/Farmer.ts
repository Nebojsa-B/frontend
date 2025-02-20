import { PersonalDetails } from "../auth/LogIn";
import { Farm } from "../farm/Farm";
import { Location } from "../location/Location";
import { FarmerProduct } from "../product/Product";

export interface FarmerSave {
  coverImageUrl?: string;
  profileImageUrl?: string;
  user: PersonalDetails;
  farm: Farm;
  location: Location;
  products: FarmerProduct[];
}

export interface FarmerParams {
  countryId?: number,
}

export interface Farmer {
  id: number
  user: UserMap
  products: ProductMap[];
  farm: FarmMap; 
}

export interface FarmMap {
  farmName: string,
  farmNumber: string,
  motto: string,
  description: string
}

export interface UserMap {
  id: number;
  coverImageUrl?: string;
  profileImageUrl?: string;
  firstName: string;
  lastName: string;
  email: string,
  phone?: string;
  location: LocationMap
}

export interface LocationMap {
  city: string;
  address: string;
  lat: number;
  lng: number;
  country: CountryMap
}

export interface CountryMap {
  name: string,
  code: string,
  currency: string,
  countryFlagUrl: string,
  lat: number,
  lng: number,
  zoom: number,
  geoJson: string;
}

export interface ProductMap {
  id: number;
  type: string;
  name: string;
  quantity: number;
  startDate: string;
  endDate: string;
  productImages: string[];
  price: number;
  farmer: Farmer
  description: string;
}

export interface FarmerSave {
  coverImageUrl?: string;
  profileImageUrl?: string;
  user: PersonalDetails;
  farm: Farm;
  location: Location;
  products: FarmerProduct[];
}