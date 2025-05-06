import { PurchaseContext } from "../src/pricing/context";
import { PriceCalculator } from "../src/pricing/price-calculator";
import { DiscountStrategy } from "../src/pricing/strategies/discount-strategy.interface";

class LoyalCustomerStrategy implements DiscountStrategy {
  getDiscount(unitPrice: number): number {
    return 0.1;
  }
}

class BulkDiscountStrategy implements DiscountStrategy {
  getDiscount(unitPrice: number): number {
    return 0.05;
  }
}

class NovemberElectronicsStrategy implements DiscountStrategy {
  getDiscount(unitPrice: number): number {
    return 0.07;
  }
}

describe("PriceCalculator", () => {
  let calculator: PriceCalculator;

  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("should apply only loyal customer discount", () => {
    calculator = new PriceCalculator([new LoyalCustomerStrategy()]);
    const context: PurchaseContext = {
      category: "electronics",
      quantity: 1,
      unitPrice: 100,
      date: new Date(),
      isLoyalCustomer: true,
    };

    const finalPrice = calculator.calculate(context);
    expect(finalPrice).toBe(90);
  });

  it("should apply loyal + bulk discount capped at 15%", () => {
    calculator = new PriceCalculator([
      new LoyalCustomerStrategy(),
      new BulkDiscountStrategy(),
    ]);
    const context: PurchaseContext = {
      category: "electronics",
      quantity: 10,
      unitPrice: 100,
      date: new Date(),
      isLoyalCustomer: true,
    };

    const finalPrice = calculator.calculate(context);
    expect(finalPrice).toBe(850);
  });

  it("should apply only November electronics discount", () => {
    jest.setSystemTime(new Date("2023-11-15"));
    calculator = new PriceCalculator([new NovemberElectronicsStrategy()]);
    const context: PurchaseContext = {
      category: "electronics",
      quantity: 1,
      unitPrice: 100,
      date: new Date(),
      isLoyalCustomer: false,
    };

    const finalPrice = calculator.calculate(context);
    expect(finalPrice).toBe(93);
  });

  it("should apply all three discounts but cap at 15%", () => {
    jest.setSystemTime(new Date("2023-11-15"));
    calculator = new PriceCalculator([
      new LoyalCustomerStrategy(),
      new BulkDiscountStrategy(),
      new NovemberElectronicsStrategy(),
    ]);
    const context: PurchaseContext = {
      category: "electronics",
      quantity: 10,
      unitPrice: 100,
      date: new Date(),
      isLoyalCustomer: true,
    };

    const finalPrice = calculator.calculate(context);
    expect(finalPrice).toBe(850);
  });

  it("should apply no discount", () => {
    calculator = new PriceCalculator([]);
    const context: PurchaseContext = {
      category: "electronics",
      quantity: 1,
      unitPrice: 100,
      date: new Date(),
      isLoyalCustomer: false,
    };

    const finalPrice = calculator.calculate(context);
    expect(finalPrice).toBe(100);
  });
});
