import { PurchaseContext } from "../context";
import { DiscountStrategy } from "./discount-strategy.interface";

// Estratégia de desconto para eletrônicos em novembro
// A verificação do mês é feita com getMonth(), que retorna 0 para janeiro até 11 para dezembro.
export class NovemberElectronicsStrategy implements DiscountStrategy {
  getDiscount(originalPrice: number, context?: PurchaseContext): number {
    const isNovember = context?.date.getMonth() === 10; // Novembro é representado por 10
    const isElectronics = context?.category === "electronics";

    // Aplica 7% de desconto se for eletrônico comprado em novembro
    const discount = isNovember && isElectronics ? 0.07 : 0.0;

    return originalPrice * (1 - discount);
  }
}
