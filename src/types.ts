import {
  SILVER_PLAN,
  GOLD_PLAN,
  PREMIUM_RESIDENTIAL,
  ELITE_RESIDENTIAL,
  PREMIUM_DATACENTER,
  BASIC_GW,
  PREMIUM_GW,
  ELITE_GW,
  OLD_GIVEAWAY,
  PAID,
  CREDIT,
} from "./constants";

export type SellingPlans =
  | typeof SILVER_PLAN
  | typeof GOLD_PLAN
  | typeof PREMIUM_RESIDENTIAL
  | typeof ELITE_RESIDENTIAL
  | typeof PREMIUM_DATACENTER;

export type GwPlans =
  | typeof BASIC_GW
  | typeof PREMIUM_GW
  | typeof ELITE_GW
  | typeof OLD_GIVEAWAY;

export type PaidStatus = typeof PAID | typeof CREDIT;
