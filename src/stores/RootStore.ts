import { Instance, types } from "mobx-state-tree";
import { createContext, useContext } from "react";
import { CheckoutStore } from "./domains/CheckoutStore";
import { ProductStore } from "./domains/ProductStore";

const RootStore = types.model({
  productStore: ProductStore,
  checkoutStore: CheckoutStore,
});

let initialState = RootStore.create({
  productStore: {},
  checkoutStore: {
    items: [],
  },
});

export const rootStore = initialState;

export type RootStoreInstance = Instance<typeof RootStore>;
const RootStoreContext = createContext<null | RootStoreInstance>(null);

export const RootStoreProvider = RootStoreContext.Provider;

export function useStores() {
  let rootStore = useContext(RootStoreContext);
  if (rootStore === null) {
    rootStore = initialState;
  }

  return rootStore;
}
