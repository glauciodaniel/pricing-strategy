import { PurchaseContext } from "../context";
import { DiscountStrategy } from "./discount-strategy.interface";

// Estratégia de desconto para compras em grande quantidade
export class BulkDiscountStrategy implements DiscountStrategy {
  getDiscount(originalPrice: number, context?: PurchaseContext): number {
    const discount = context && context.quantity > 10 ? 0.05 : 0.0; // 5% se mais de 10 unidades, senão 0%
    return originalPrice * (1 - discount);
  }
}
