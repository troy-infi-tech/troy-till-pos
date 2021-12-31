import { CampaignEnum } from "logic/enums/CampaignEnum";

export type CustomerCampaign = {
  customerId: string;
  campaign: CampaignEnum;
};
