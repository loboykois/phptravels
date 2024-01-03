// export class BaseSamplePage<TMainSectionType> {
//     public  : TMainSectionType;
// };

// export class PricingContent {
//     public section1: object;
// }

// export class PricingPage extends BaseSamplePage<PricingContent> {
//     public someOtherProp: object;
// }

// const pricingPage = new PricingPage<PricingContent>();

// interface Building {
//   isReady: boolean;
//   info: {
//     id: number;
//     square: number;
//     price: number;
//     address: string;
//     floors: number;
//     rooms: number;
//   };
// }

// abstract class House implements Building {
//   readonly isReady: boolean;
//   readonly info: {
//     id: number;
//     square: number;
//     price: number;
//     address: string;
//     floors: number;
//     rooms: number;
//   };

//   protected constructor(isReady: boolean, info: { id: number; square: number; price: number; address: string; floors: number; rooms: number }) {
//     this.isReady = isReady;
//     this.info = info;
//   }

//   protected houseExploitation(): string {
//     if (this.isReady) {
//       return "House is ready for living";
//     }
//     return "House is NOT ready";
//   }

//   protected abstract houseType(type: string): string;
// }

// class forFamily extends House {}
