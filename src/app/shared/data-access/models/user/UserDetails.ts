export interface UserDetails {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  coverImageUrl: string;
  profileImageUrl: string;
  farmer: FarmerDetails;
  location: LocationDetails;
}

export interface FarmerDetails {
  id?: number;
  farm: FarmDetails;
  products: ProductDetails[]
}

export interface FarmDetails {
  id: number;
  farmName: string;
  farmNumber: string;
  motto: string;
  description: string;
}

export interface LocationDetails {
  id: number;
  city: string;
  address: string;
  lat: number;
  lng: number;
  countryId: number
}

export interface ProductDetails {
  id: number;
  type: string;
  name: string;
  quantity: number;
  price: number;
  description: string;
  startDate: Date;
  endDate: Date;
  productImages: string[]
}
