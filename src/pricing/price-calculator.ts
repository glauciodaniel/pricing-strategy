import { PurchaseContext } from "./context";
import { DiscountStrategy } from "./strategies/discount-strategy.interface";

export class PriceCalculator {
  private strategies: DiscountStrategy[];

  constructor(strategies: DiscountStrategy[]) {
    this.strategies = strategies;
  }

  calculate(context: PurchaseContext): number {
    const totalDiscount = this.strategies
      .map((strategy) => strategy.getDiscount(context.unitPrice))
      .reduce((acc, discount) => acc + discount, 0);

    const cappedDiscount = Math.min(totalDiscount, 0.15);
    const basePrice = context.unitPrice * context.quantity;
    const finalPrice = basePrice * (1 - cappedDiscount);

    return +finalPrice.toFixed(2);
  }
}
