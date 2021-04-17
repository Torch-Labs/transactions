import {
  PROXY_FEES,
  OLD_GIVEAWAY,
  CREDIT,
  STRIPE_FEE,
  STRIPE_PERCENTAGE,
  GW_PRICES,
} from "./constants";
import { SellingPlans, GwPlans, PaidStatus } from "./types";

function getProxyFee(plan_name: SellingPlans) {
  return PROXY_FEES[plan_name];
}

function handleSale(plan_name: SellingPlans, paid: string, count: string) {
  return (
    parseFloat(paid) * STRIPE_PERCENTAGE -
    STRIPE_FEE -
    getProxyFee(plan_name) * parseFloat(count)
  );
}

function handleGiveaway(
  plan_name: GwPlans,
  paid_status: PaidStatus,
  price: string,
  count: string
) {
  console.log(plan_name, paid_status, price, count);
  if (plan_name === OLD_GIVEAWAY) return 0;
  const amt = !price ? GW_PRICES[plan_name].toString() : price;
  if (paid_status === CREDIT) return parseFloat(amt) * parseFloat(count) * -1;
  return 0;
}

export function calcTransFees(
  plan_name: GwPlans & SellingPlans,
  paid: string,
  paid_status: PaidStatus,
  price: string,
  count: string
) {
  if (GW_PRICES[plan_name])
    return handleGiveaway(plan_name, paid_status, price, count);
  return handleSale(plan_name, paid, count);
}

export function calcTransFeesWithFees(
  plan_name: GwPlans & SellingPlans,
  paid: string,
  paid_status: PaidStatus,
  price: string,
  count: string
) {
  let net_total;
  if (GW_PRICES[plan_name]) {
    net_total = handleGiveaway(plan_name, paid_status, price, count);
  } else {
    net_total = handleSale(plan_name, paid, count);
  }
  let fees = GW_PRICES[plan_name]
    ? 0
    : parseFloat(paid) * (1 - STRIPE_PERCENTAGE) +
      STRIPE_FEE +
      getProxyFee(plan_name) * parseFloat(count);

  return { net_total, fees };
}
