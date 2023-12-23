import { BasePage } from "../basePage";
// import { PricingSectionType } from "./pricingPage.model";
// import { PricingSection } from "./pricingSection";

export class PricingPage extends BasePage {
  protected get path(): string {
    return "pricing";
  }

  // public async getSections(): Promise<PricingSection[]> {
  //   // get sections array
  // }

  // public async getSection(sectionType: PricingSectionType): Promise<PricingSection> {
  //   //  get section
  // }
}
