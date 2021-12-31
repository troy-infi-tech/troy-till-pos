import { cast, flow, types } from "mobx-state-tree";
import { getProducts } from "services/data/DataService";
import { ProductModel } from "models/ProductModel";
import { StatusEnum } from "stores/enums/StatusEnum";
import { withStatus } from "stores/extensions/with-status";
import { ProductStoreModel } from "stores/models/ProductStoreModel";

export const ProductStore = types
  .model("ProductStore")
  .extend(withStatus)
  .props({
    products: types.array(ProductStoreModel),
  })
  .actions((self) => ({
    setProducts(products: ProductModel[]) {
      self.products = cast(products);
    },
  }))
  .actions((self) => ({
    getProducts: flow(function* () {
      self.setStatus(StatusEnum.Handling);

      try {
        const products = yield getProducts();
        self.setProducts(products);

        self.setStatus(StatusEnum.Success);
      } catch (error) {
        self.setStatus(StatusEnum.Error);
      }
    }),
  }));
