// Contexto para estratégias de precificação

export type ProductCategory = "electronics" | "clothing" | "groceries";

export interface PurchaseContext {
  category: ProductCategory;
  quantity: number;
  unitPrice: number;
  date: Date;
  isLoyalCustomer: boolean;
}
