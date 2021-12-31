import { Checkout } from "logic/Checkout";
import { ItemModel } from "models/ItemModel";
import pricingRules from "mocks/pricing-rules.json";
import products from "mocks/products.json";
import { PricingRule } from "models/PricingRule";
import { ProductModel } from "models/ProductModel";
import { SizeEnum } from "services/enums/SizeEnum";
import { v4 as uuidV4 } from "uuid";

describe("Checkout process test", () => {
  let co: Checkout;
  let items: ItemModel[];
  let smallProduct: any;
  let mediumProduct: any;
  let largeProduct: any;

  beforeEach(() => {
    co = new Checkout(pricingRules as PricingRule[]);
    smallProduct = products.find(
      (product) => product.size === SizeEnum.Small.toString()
    );
    mediumProduct = products.find(
      (product) => product.size === SizeEnum.Medium.toString()
    );
    largeProduct = products.find(
      (product) => product.size === SizeEnum.Large.toString()
    );
  });

  it("should has small, medium and large product", () => {
    expect(smallProduct).not.toBeUndefined();
    expect(mediumProduct).not.toBeUndefined();
    expect(largeProduct).not.toBeUndefined();
  });

  it("should handle Default customer order", () => {
    items = [
      {
        id: uuidV4(),
        customerId: "Default",
        product: smallProduct as ProductModel,
        quantity: 1,
      },
      {
        id: uuidV4(),
        customerId: "Default",
        product: mediumProduct as ProductModel,
        quantity: 1,
      },
      {
        id: uuidV4(),
        customerId: "Default",
        product: largeProduct as ProductModel,
        quantity: 1,
      },
    ];

    items.forEach((item) => co.add(item));
    const total = co.total();

    expect(total).toBe(49.97);
  });

  it("should handle Microsoft customer order", () => {
    items = [
      {
        id: uuidV4(),
        customerId: "Microsoft",
        product: smallProduct as ProductModel,
        quantity: 3,
      },
      {
        id: uuidV4(),
        customerId: "Microsoft",
        product: largeProduct as ProductModel,
        quantity: 1,
      },
    ];

    items.forEach((item) => co.add(item));
    const total = co.total();

    expect(total).toBe(45.97);
  });

  it("should handle Amazon customer order", () => {
    items = [
      {
        id: uuidV4(),
        customerId: "Amazon",
        product: mediumProduct as ProductModel,
        quantity: 3,
      },
      {
        id: uuidV4(),
        customerId: "Amazon",
        product: largeProduct as ProductModel,
        quantity: 1,
      },
    ];

    items.forEach((item) => co.add(item));
    const total = co.total();

    expect(total).toBe(67.96);
  });

  it("should handle Facebook customer order", () => {
    items = [
      {
        id: uuidV4(),
        customerId: "Facebook",
        product: smallProduct as ProductModel,
        quantity: 1,
      },
      {
        id: uuidV4(),
        customerId: "Facebook",
        product: mediumProduct as ProductModel,
        quantity: 11,
      },
      {
        id: uuidV4(),
        customerId: "Facebook",
        product: largeProduct as ProductModel,
        quantity: 1,
      },
    ];

    items.forEach((item) => co.add(item));
    const total = co.total();

    expect(total).toBe(177.89);
  });
});
