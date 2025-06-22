import { LoyaltyUser } from "./enum"

export interface Review {
  name: string;
  stars: number;
  loyaltyUser: LoyaltyUser;
  date: string;
}