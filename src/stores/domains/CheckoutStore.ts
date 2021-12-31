import { cast, types } from "mobx-state-tree";
import { withStatus } from "stores/extensions/with-status";
import { ItemStoreModel } from "stores/models/ItemStoreModel";

export const CheckoutStore = types
  .model("CheckoutStore")
  .extend(withStatus)
  .props({
    items: types.array(ItemStoreModel),
  })
  .views((self) => ({
    totalAmount() {
      return 0;
    },
  }))
  .actions((self) => ({
    setItems(items: any) {
      self.items = cast(items);
    },
    checkout() {},
  }))
  .actions((self) => ({}));
