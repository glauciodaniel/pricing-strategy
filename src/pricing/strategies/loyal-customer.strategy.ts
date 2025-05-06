import { PurchaseContext } from "../context";
import { DiscountStrategy } from "./discount-strategy.interface";

// Estratégia de desconto para clientes fiéis
export class LoyalCustomerStrategy implements DiscountStrategy {
  getDiscount(originalPrice: number, context?: PurchaseContext): number {
    return context?.isLoyalCustomer ? originalPrice * 0.1 : 0;
  }
}
