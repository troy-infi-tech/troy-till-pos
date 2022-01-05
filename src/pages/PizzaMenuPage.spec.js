/* eslint-disable no-undef */
/// <reference types="cypress" />
import { mount } from "@cypress/react";
import PizzaMenuPage from "./PizzaMenuPage";
import products from "mocks/products.json";

describe("Pizza Menu Page", () => {
  beforeEach(() => {
    mount(<PizzaMenuPage />);
  });

  it("Should render all pizzas", () => {
    products.forEach((product) => {
      cy.get(`div[id=${product.id}]`);
    });
  });

  it("Should have display correct price for each product", () => {
    products.forEach((product) => {
      cy.get(`p[id=price-for-${product.id}]`).contains(
        `${product.currency} ${product.retailPrice}`
      );
    });
  });
});
