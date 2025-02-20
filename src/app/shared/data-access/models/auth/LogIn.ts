import { LocationMap } from "../farmer/Farmer";

export interface RegistrationForm {
  firstName: string;
  lastName: string;
  country: string;
  email: string;
  password: string;
}
export interface LoginForm {
  email: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string | null;
  user: Profile | null
}

export interface Profile {
  id: number,
  email: string,
  firstName: string,
  lastName: string,
  farmerId?: number,
  countryId: number,
  location?: {
    countryId: number
  }
}

export interface PersonalDetails {
  id: number,
  email: string,
  firstName: string,
  lastName: string,
  phone: string,
  coverImageUrl: string,
  profileImageUrl: string
}

