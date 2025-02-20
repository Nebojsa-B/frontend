import { NumberSymbol } from "@angular/common";
import { UserMap } from "../farmer/Farmer";

export interface CustomerReviewDetails {
  comment?: string;
  stars: number;
  createdAt: Date;
  user: {
    firstName: string;
    lastName: string;
  }
}
export interface CustomerReview {
  id?: number;
  comment?: string;
  stars: number;
  createdAt: Date;
  user: {
    id: number,
    firstName: string;
    lastName: string;
  }
}

export interface CustomerReviewParams {
  farmerId: number;
}