import { Page } from "@playwright/test";
import { FooterCopyright } from "./footerCopyright";
import { FooterNavigation } from "./footerNavigation";
import { FooterPayments } from "./footerPayments";

export class Footer {
  private readonly footerNavigation: FooterNavigation;
  private readonly footerPayments: FooterPayments;
  private readonly footerCopyright: FooterCopyright;

  public constructor(private readonly page: Page) {
    this.footerNavigation = new FooterNavigation();
    this.footerPayments = new FooterPayments();
    this.footerCopyright = new FooterCopyright();
  }
}
