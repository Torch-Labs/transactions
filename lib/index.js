"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcTransFees = void 0;
const constants_1 = require("./constants");
function getProxyFee(plan_name) {
    return constants_1.PROXY_FEES[plan_name];
}
function handleSale(plan_name, paid) {
    return (parseFloat(paid) * constants_1.STRIPE_PERCENTAGE - constants_1.STRIPE_FEE - getProxyFee(plan_name));
}
function handleGiveaway(plan_name, paid_status, price) {
    if (plan_name === constants_1.OLD_GIVEAWAY)
        return 0;
    if (paid_status === constants_1.CREDIT)
        return parseFloat(price) * -1;
    return parseFloat(price);
}
function calcTransFees(plan_name, paid, paid_status, price) {
    if (constants_1.GW_PRICES[plan_name])
        return handleGiveaway(plan_name, paid_status, price);
    return handleSale(plan_name, paid);
}
exports.calcTransFees = calcTransFees;
//# sourceMappingURL=index.js.map