import { SizeEnum } from "services/enums/SizeEnum";
import { ProductModel } from "models/ProductModel";
import { v4 as uuidV4 } from "uuid";
import { PricingRule } from "models/PricingRule";
import { CampaignEnum } from "logic/enums/CampaignEnum";

export const getProducts = async (): Promise<ProductModel[]> =>
  Promise.resolve([
    {
      id: uuidV4(),
      name: "Small Pizza",
      description: '10" pizza for one person',
      image:
        "https://doiduavang.vn/wp-content/uploads/2021/01/pizza-nhan-hai-san-doi-dua-vang-scaled.jpg",
      size: SizeEnum.Small,
      retailPrice: 11.99,
      currency: "USD",
    },
    {
      id: uuidV4(),
      name: "Medium Pizza",
      description: '12" pizza for two person',
      image:
        "https://doiduavang.vn/wp-content/uploads/2021/01/pizza-nhan-hai-san-doi-dua-vang-scaled.jpg",
      size: SizeEnum.Medium,
      retailPrice: 15.99,
      currency: "USD",
    },
    {
      id: uuidV4(),
      name: "Large Pizza",
      description: '15" pizza for four person',
      image:
        "https://doiduavang.vn/wp-content/uploads/2021/01/pizza-nhan-hai-san-doi-dua-vang-scaled.jpg",
      size: SizeEnum.Large,
      retailPrice: 21.99,
      currency: "USD",
    },
  ]);

export const getPricingRules = async (): Promise<PricingRule[]> =>
  Promise.resolve([
    {
      customerId: "Microsoft",
      campaign: CampaignEnum.GetXForYDeal,
      campaignParams: {
        discountedSize: SizeEnum.Small,
        xQuantity: 3,
        yQuantity: 2,
      },
    },
    {
      customerId: "Amazon",
      campaign: CampaignEnum.PriceDrops,
      campaignParams: {
        discountedSize: SizeEnum.Large,
        discountPrice: 19.99,
      },
    },
    {
      customerId: "Facebook",
      campaign: CampaignEnum.GetXForYDeal,
      campaignParams: {
        discountedSize: SizeEnum.Medium,
        xQuantity: 5,
        yQuantity: 4,
      },
    },
  ]);
