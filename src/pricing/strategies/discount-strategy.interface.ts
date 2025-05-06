// Interface para estratégias de desconto
export interface DiscountStrategy {
  getDiscount(originalPrice: number): number;
}
