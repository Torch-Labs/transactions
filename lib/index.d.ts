import { SellingPlans, GwPlans, PaidStatus } from "./types";
export declare function calcTransFees(plan_name: GwPlans & SellingPlans, paid: string, paid_status: PaidStatus, price: string, count: string): number;
export declare function calcTransFeesWithFees(plan_name: GwPlans & SellingPlans, paid: string, paid_status: PaidStatus, price: string, count: string): {
    net_total: number;
    fees: number;
};
//# sourceMappingURL=index.d.ts.map