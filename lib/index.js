"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcTransFees = void 0;
const constants_1 = require("./constants");
function getProxyFee(plan_name) {
    return constants_1.PROXY_FEES[plan_name];
}
function handleSale(plan_name, paid, count) {
    return (parseFloat(paid) * constants_1.STRIPE_PERCENTAGE -
        constants_1.STRIPE_FEE -
        getProxyFee(plan_name) * parseFloat(count));
}
function handleGiveaway(plan_name, paid_status, price, count) {
    if (plan_name === constants_1.OLD_GIVEAWAY)
        return 0;
    if (paid_status === constants_1.CREDIT)
        return parseFloat(price) * parseFloat(count) * -1;
    return 0;
}
function calcTransFees(plan_name, paid, paid_status, price, count) {
    if (constants_1.GW_PRICES[plan_name])
        return handleGiveaway(plan_name, paid_status, price, count);
    return handleSale(plan_name, paid, count);
}
exports.calcTransFees = calcTransFees;
//# sourceMappingURL=index.js.map